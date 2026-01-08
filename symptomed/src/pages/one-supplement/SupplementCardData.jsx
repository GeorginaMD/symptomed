import "./SupplementCardData.css"

export default function SupplementCardData({ supplement }) {

    if (!supplement) return <div>Loading...</div>

    return (
        <div className="supplement-card-data">
            <img src={supplement.image} alt={supplement.name} className="supplement-image"/>
            <h1>{supplement.name}</h1>
            <ul>
                <li>Benefits: {supplement.benefits.join(", ")}</li>
                <li>Disease: {supplement.disease.join(", ")}</li>
                <li>Dose: {supplement.dose.join(", ")}</li>
                <li>Suggestions: {supplement.suggestions.join(", ")}</li>
            </ul>
            
        </div>
    )
}