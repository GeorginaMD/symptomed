import "./OpenFdaCategoriesSection.css"
import OpenFdaDataCategories from "./OpenFdaDataCategories"
import OpenFdaDataDrugs from "./OpenFdaDataDrugs"
import ButtonHomePage from "../../components/ButtonHomePage"

export default function OpenFdaCategoriesSection() {
    return (
        <div className="open-fda-categories-wrapper">
            <section className="open-fda-categories-section">
                <OpenFdaDataCategories />
                <OpenFdaDataDrugs />
            </section>
            <ButtonHomePage />
        </div>
        
    )
}