import "./OpenFdaCategoriesSection.css"
import OpenFdaDataCategories from "./OpenFdaDataCategories"
import OpenFdaDataDrugs from "./OpenFdaDataDrugs"
import ButtonHomePage from "../../components/ButtonHomePage"

export default function OpenFdaCategoriesSection() {
    return (
        <section className="open-fda-categories-section">
            <p>test open fda categories section</p>
            <OpenFdaDataCategories />
            <OpenFdaDataDrugs />
            <ButtonHomePage />
        </section>
    )
}