import "./SupplementsCard.css"
import { Link } from "react-router"

export default function SupplementsCard() {
    return (
        <div className="supplement-card">
            <Link to="/one-supplement" className="link"> Vitamin x </Link>
        </div>
    )
}