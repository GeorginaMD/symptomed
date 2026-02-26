import "./AllSupplements.css"
import SupplementsSection from "./SupplementsSection"
import ButtonHomePage from "../../components/ButtonHomePage"

export default function AllSupplements() {
    return (
        <div className="all-supplements-main-wrapper">
            <div className="all-supplements-wrapper">
                <SupplementsSection />
            </div>
            <ButtonHomePage />
        </div>
    )
}