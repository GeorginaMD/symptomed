import "./LoginSection.css"
import LoginForm from "./LoginForm"
import ButtonHomePage from "../../components/ButtonHomePage"

export default function LoginSection() {
    return (
        <section className="login-section">
            <LoginForm />
            <ButtonHomePage />
        </section>
    )
}