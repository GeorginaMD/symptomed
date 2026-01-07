import "./SupplementCardData.css"

export default function SupplementCardData() {
    return (
        <div className="supplement-card-data">
            <img src={supplement.image} alt={supplement.name} className="supplement-image"/>
            <h1>{supplement.name}</h1>
            <ul>
                <li>Benefits: supporting vision, skin health</li>
                <li>Disease: night blindness, acne vulgaris</li>
                <li>Dose: men: 900mcg, women: 700mcg</li>
                <li>Suggestions: take with a meal that contains healthy fats, Zinc supports vitamin A absorption</li>
            </ul>
            
        </div>
    )
}