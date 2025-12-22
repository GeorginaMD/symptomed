import "./DemoSection.css"
import DemoLoginForm from "./DemoLoginForm"
import { Link } from "react-router"

export default function DemoSection() {
    return (
        <section className="demo-section">
            <DemoLoginForm />
            <Link to="/" className="link">Home page</Link>
        </section>
    )
}