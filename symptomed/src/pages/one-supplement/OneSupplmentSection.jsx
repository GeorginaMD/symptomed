import "./OneSupplementSection.css"
import SupplementCardData from "./SupplementCardData"
import { Link } from "react-router"
import { useParams } from "react-router"
import { useEffect, useState } from "react"

export default function OneSupplementSection() {
    const { slug } = useParams();
    const [supplement, setSupplement] = useState(null);

    useEffect(() => {
        fetch(`https://symptomed.onrender.com/api/supplements/${slug}`)
        .then(res => res.json())
        .then(data => setSupplement(data));
    }, [slug]);

    return (
        <section className="one-supplement-section">
            <SupplementCardData supplement={supplement} />
            <div className="one-supplement-link-buttons">
                <Link to="/all-supplements" className="home-page">Back</Link>
                <Link to="/" className="home-page">Home Page</Link>
            </div>
        </section>
        
    )
}