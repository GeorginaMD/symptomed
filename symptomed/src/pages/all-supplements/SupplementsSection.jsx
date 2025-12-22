import SupplementsCard from "./SupplementsCard"
import "./SupplementsSection.css"
import { Link } from "react-router"

export default function SupplementsSection() {
    return (
        <section className="supplements-section">
            <SupplementsCard />
            <SupplementsCard />
            <SupplementsCard />
            <SupplementsCard />
            <br />
            <Link to="/" className="link"> Home Page </Link>
        </section>
    )
}