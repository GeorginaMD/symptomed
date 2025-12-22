import "./RegisterSection.css"
import RegisterForm from "./RegisterForm"
import { Link } from "react-router"

export default function RegisterSection() {
    return(
        <section className="register-section">
            <RegisterForm />
            <Link to="/" className="link">Home page</Link>
        </section>
    )
}