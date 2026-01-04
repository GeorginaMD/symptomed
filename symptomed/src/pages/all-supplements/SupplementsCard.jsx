import "./SupplementsCard.css"
import { Link } from "react-router"

export default function SupplementsCard({ supplement }) {
    
    return (
        <div className="supplement-card">
            <Link to={`/one-supplement/${supplement.slug}`} className="link"> 
                <h1>{supplement.name}</h1>
                <img src={supplement.image} alt={supplement.name} className="supplement-image"/>
            </Link>
        </div>
    )
}