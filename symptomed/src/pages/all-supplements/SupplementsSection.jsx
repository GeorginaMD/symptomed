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
<<<<<<< HEAD
        <section className="supplements-section">
            {supplements.map(s => (
                <SupplementsCard key={s.slug} supplement={s}/>
            ))}
            {/* <SupplementsCard /> */}
=======
        <div className="all-supplements">
            <div className="supplements-section-wrapper">
                <section className="supplements-section">
                    {supplements.map(s => (
                        <SupplementsCard key={s.slug} supplement={s}/>
                    ))}
                    {/* <SupplementsCard /> */}
                    {/* <Link to="" className="">Display all the supplements</Link> */}
                </section>
            </div>
>>>>>>> b0b5dd7 (Added display layout and styling for all supplements page)
            <ButtonHomePage />
            {/* <Link to="" className="">Display all the supplements</Link> */}
        </section>
    )
}