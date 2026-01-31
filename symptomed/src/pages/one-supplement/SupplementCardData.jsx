import "./SupplementCardData.css"
import { Link } from "react-router"

export default function SupplementCardData({ supplement }) {

    if (!supplement) return <div>Loading...</div>

    return (
        <div className="supplement-card-wrapper">
            <div className="supplement-card-data">
                <img src={supplement.image} alt={supplement.name} className="supplement-image" style={{scale: "unset", boxShadow: "none" }}/>
                <div className="supplement-ul-wrapper">
                    <h1 className="supplement-name-h1">{supplement.name}</h1>
                    <ul className="supplement-data-ul">
                        <li className="supplement-data-li"><span>BENEFITS: </span>{supplement.benefits.join(", ")}</li>
                        <li className="supplement-data-li"><span>DISEASE: </span>{supplement.disease.join(", ")}</li>
                        <li className="supplement-data-li"><span>DOSE: </span>{supplement.dose.join(", ")}</li>
                        <li className="supplement-data-li"><span>SUGGESTIONS: </span>{supplement.suggestions.join(", ")}</li>
                    </ul>
                </div>
                <div className="one-supplement-link-buttons">
                    <Link to="/all-supplements" className="home-page">Back</Link>
                    <Link to="/" className="home-page">Home Page</Link>
                </div>
            </div>
        </div>
    )
}