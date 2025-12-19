import "./FdaDrugsSection.css"
import FdaDrugCardData from "./FdaDrugCardData"
import { Link } from "react-router"

export default function FdaDrugsSection() {
    return(
        <section className="fda-drugs-section">
            <p>These are the recommendations for your symptoms:</p>
            <FdaDrugCardData />
            <FdaDrugCardData />
            <FdaDrugCardData />
            <br />
            <Link to="/" className="link"> Home Page </Link>
        </section>
    )
}