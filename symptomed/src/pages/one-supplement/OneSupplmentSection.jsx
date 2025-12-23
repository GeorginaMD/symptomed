import "./OneSupplementSection.css"
import { Link } from "react-router"
import SupplementCardData from "./SupplementCardData"
import ButtonHomePage from "../../components/ButtonHomePage"

export default function OneSupplementSection() {
    return (
        <section className="one-supplement-section">
            <SupplementCardData />
            <br />
            <Link to="/all-supplements" className="all-vitamins"> All Vitamins </Link>
            <ButtonHomePage />
            
        </section>
        
    )
}