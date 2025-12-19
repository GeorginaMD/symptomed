import "./OpenFdaCategoriesSection.css"
import OpenFdaDataCategories from "./OpenFdaDataCategories"
import OpenFdaDataDrugs from "./OpenFdaDataDrugs"
import { Link } from "react-router"

export default function OpenFdaCategoriesSection() {
    return (
        <section className="open-fda-categories-section">
            <p>test open fda categories section</p>
            <OpenFdaDataCategories />
            <OpenFdaDataDrugs />
            <Link to="/" className="link"> Home Page </Link>
        </section>
    )
}