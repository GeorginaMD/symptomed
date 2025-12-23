import "./FdaDrugsSection.css"
import FdaDrugCardData from "./FdaDrugCardData"
import ButtonHomePage from "../../components/ButtonHomePage"

export default function FdaDrugsSection() {
    return(
        <section className="fda-drugs-section">
            <p>These are the recommendations for your symptoms:</p>
            <FdaDrugCardData />
            <FdaDrugCardData />
            <FdaDrugCardData />
            <br />
            <ButtonHomePage />
        </section>
    )
}