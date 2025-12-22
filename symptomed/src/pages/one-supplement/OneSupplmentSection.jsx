import "./OneSupplementSection.css"
import { Link } from "react-router"
import SupplementCardData from "./SupplementCardData"

export default function OneSupplementSection() {
    return (
        <section className="one-supplement-section">
            <SupplementCardData />
            <br />
            <Link to="/" className="link"> Home Page </Link>
        </section>
    )
}