import SupplementsCard from "./SupplementsCard"
import "./SupplementsSection.css"
import ButtonHomePage from "../../components/ButtonHomePage"
import { useEffect, useState } from "react"
import { Link } from "react-router"

export default function SupplementsSection() {

    const  [supplements, setSupplements] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/supplements")
        .then(res => res.json())
        .then(data => setSupplements(data));
    }, []);

    return (
        <section className="supplements-section">
            {supplements.map(s => (
                <SupplementsCard key={s.slug} supplement={s}/>
            ))}
            {/* <SupplementsCard /> */}
            <ButtonHomePage />
            {/* <Link to="" className="">Display all the supplements</Link> */}
        </section>
    )
}