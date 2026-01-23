import "./SupplementsCard.css"
import { Link } from "react-router"

export default function SupplementsCard({ supplement }) {
    
    return (
        <div className="supplement-card">
            <Link to={`/one-supplement/${supplement.slug}`} className="supplement-link"> 
                <h1>{supplement.name}</h1>
                <img src={supplement.image} alt={supplement.name} className="supplement-image"/>
=======
                <img src={supplement.image} alt={supplement.name} className="supplement-image"/>
                <h1 className="supplement-card-title">{supplement.name}</h1>
>>>>>>> b0b5dd7 (Added display layout and styling for all supplements page)
            </Link>
        </div>
    )
}

{/* <div className="supplement-card">
            <div className="supplement-inner-wrapper">
                <div className="image-name">
                    <img src="./images/supplements/Citruline.webp" alt="" className="supplement-image"/> 
                    <h1 className="supplement-name">Citruline</h1>
                </div>
                <div className="image-name">
                    <img src="./images/supplements/NAC.webp" alt="" className="supplement-image"/>
                    <h1 className="supplement-name">NAC</h1>
                </div>
                <div className="image-name">
                    <img src="./images/supplements/Iron.webp" alt="" className="supplement-image"/>
                    <h1 className="supplement-name">Iron</h1>
                </div>
                <div className="image-name">
                    <img src="./images/supplements/Selenium.webp" alt="" className="supplement-image"/>
                    <h1 className="supplement-name">Selenium</h1>
                </div>
                <div className="image-name">
                    <img src="./images/supplements/Coenzyme-Q10.webp" alt="" className="supplement-image"/>
                    <h1 className="supplement-name">Coenzyme-Q10</h1>
                </div>
            </div>
        </div> */}