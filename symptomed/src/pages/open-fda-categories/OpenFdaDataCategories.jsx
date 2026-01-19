import "./OpenFdaDataCategories.css"

export default function OpenFdaDataCategories() {
    return (
        <div className="categories-wrapper">
            <button className="drug-category">
                <img src="./images/drugs/Cold-Allergy.webp" alt="" className="drug-image"/>
                <h2 className="category-name">Cold & Allergy</h2>
            </button>
            <button className="drug-category">
                <img src="./images/drugs/Digestive-Issues.webp" alt="" className="drug-image"/>
                <h2 className="category-name">Digestive Issues</h2>
            </button>
            <button className="drug-category">
                <img src="./images/drugs/Pain-Inflamation.webp" alt="" className="drug-image"/>
                <h2 className="category-name">Pain & Inflamation</h2>
            </button>
            <button className="drug-category">
                <img src="./images/drugs/Sleep-Energy.webp" alt="" className="drug-image"/>
                <h2 className="category-name">Sleep & Energy</h2>
            </button>
            <button className="drug-category">
                <img src="./images/drugs/Skin-Conditions.webp" alt="" className="drug-image"/>
                <h2 className="category-name">Skin Conditions</h2>
            </button>
            <button className="drug-category">
                <img src="./images/drugs/Eye-Ear.webp" alt="" className="drug-image"/>
                <h2 className="category-name">Eye & Ear</h2>
            </button>
            <button className="drug-category">
                <img src="./images/drugs/First-Aid.webp" alt="" className="drug-image"/>
                <h2 className="category-name">First Aid</h2>
            </button>
        </div>
    )
}