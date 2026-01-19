import "./FdaDrugsSection.css"
import FdaDrugCardData from "./FdaDrugCardData"
import ButtonHomePage from "../../components/ButtonHomePage"

export default function FdaDrugsSection() {
    return(
        <section className="fda-drugs-section">
            <p>These drugs are recommended for your symptoms:</p>
            <div className="fda-drugs-section-wrapper">
                <FdaDrugCardData />
                <FdaDrugCardData />
                <FdaDrugCardData />
                <FdaDrugCardData />
                <FdaDrugCardData />
                <FdaDrugCardData />
            </div>
            <ButtonHomePage />

        </section>
    )
}