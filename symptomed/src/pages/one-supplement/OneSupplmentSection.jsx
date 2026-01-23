import "./OneSupplementSection.css"
import { Link } from "react-router"
import SupplementCardData from "./SupplementCardData"
import ButtonHomePage from "../../components/ButtonHomePage"
import { useParams } from "react-router"
import { useEffect, useState } from "react"

export default function OneSupplementSection() {
    const { slug } = useParams();
    const [supplement, setSupplement] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/supplements/${slug}`)
        .then(res => res.json())
        .then(data => setSupplement(data));
    }, [slug]);

    return (
        <section className="one-supplement-section">
            <SupplementCardData supplement={supplement} />
            <br />
            {/* <Link to="/all-supplements" className="all-vitamins"> All Vitamins </Link> */}
            <ButtonHomePage />
        </section>
        
    )
}