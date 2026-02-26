import "./SupplementsCard.css"
import { Link } from "react-router"

export default function SupplementsCard({ supplement }) {
    
    return (
        <div className="supplement-card">
            <Link to={`/one-supplement/${supplement.slug}`} className="supplement-link"> 
                <img src={supplement.image} alt={supplement.name} className="supplement-image"/>
                <h1 className="supplement-card-title">{supplement.name}</h1>
            </Link>
        </div>
    )
}