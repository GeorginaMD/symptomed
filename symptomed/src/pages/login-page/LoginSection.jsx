import "./LoginSection.css"
import LoginForm from "./LoginForm"
import { Link } from "react-router"

export default function LoginSection() {
    return (
        <section className="login-section">
            <LoginForm />
            <Link to="/" className="link">Home page</Link>
        </section>
    )
}