import "./FdaDrugsSection.css"
import FdaDrugCardData from "./FdaDrugCardData"
import ButtonHomePage from "../../components/ButtonHomePage"

export default function FdaDrugsSection({drugs}) {
    return (
        <div className="fda-drugs-section-main-wrapper">
            <div className="fda-drugs-section">
                <p className="title-recommended-drugs">This is a list of 10 drugs that can be used with your {/* {category.symptoms.label} */} symptoms:</p>
                <div className="outer-fda-drugs-section-wrapper">
                    <div className="fda-drugs-section-wrapper">
                        {drugs.map((drug) => (
                            <FdaDrugCardData key={drug.name} drug={drug}/>
                        ))}
                        {drugs.length === 0 && <p>No results found.</p>}
                    </div>
                </div>
            </div>
            <ButtonHomePage />
        </div>
    )
}