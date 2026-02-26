import SupplementsCard from "./SupplementsCard"
import "./SupplementsSection.css"
import ButtonHomePage from "../../components/ButtonHomePage"
import { useEffect, useState } from "react"
import { Link } from "react-router"

export default function SupplementsSection() {

    const  [supplements, setSupplements] = useState([]);

    useEffect(() => {
        fetch("https://symptomed.onrender.com/api/supplements")
        .then(res => res.json())
        .then(data => setSupplements(data));
    }, []);

    return (
        <div className="all-supplements">
            <div className="outer-supplements-wrapper">
                <div className="supplements-section-wrapper">
                    <section className="supplements-section">
                        {supplements.map(s => (
                            <SupplementsCard key={s.slug} supplement={s}/>
                        ))}
                    </section>
                </div>
            </div>
            <ButtonHomePage />
        </div>
    )
}