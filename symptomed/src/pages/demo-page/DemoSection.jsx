import "./DemoSection.css"
import DemoLoginForm from "./DemoLoginForm"
import ButtonHomePage from "../../components/ButtonHomePage"

export default function DemoSection() {
    return (
        <section className="demo-section">
            <DemoLoginForm />
            <ButtonHomePage />
        </section>
    )
}