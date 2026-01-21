import "./FdaDrugsSection.css"
import FdaDrugCardData from "./FdaDrugCardData"
import ButtonHomePage from "../../components/ButtonHomePage"

export default function FdaDrugsSection({drugs}) {
    return (
        <section className="fda-drugs-section">
            <p className="title-recommended-drugs">These drugs are recommended for your symptoms:</p>
            <div className="fda-drugs-section-wrapper">
                {drugs.map((drug) => (
                    <FdaDrugCardData key={drug.name} drug={drug}/>
                ))}
                {drugs.length === 0 && <p>No results found.</p>}
            </div>
            <ButtonHomePage />
        </section>
    )
}