import SupplementsCard from "./SupplementsCard"
import "./SupplementsSection.css"
import ButtonHomePage from "../../components/ButtonHomePage"

export default function SupplementsSection() {
    return (
        <section className="supplements-section">
            <SupplementsCard />
            <SupplementsCard />
            <SupplementsCard />
            <SupplementsCard />
            <br />
            <ButtonHomePage />
        </section>
    )
}