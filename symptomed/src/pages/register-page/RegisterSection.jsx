import "./RegisterSection.css"
import RegisterForm from "./RegisterForm"
import ButtonHomePage from "../../components/ButtonHomePage"

export default function RegisterSection() {
    return(
        <section className="register-section">
            <RegisterForm />
            <ButtonHomePage />
        </section>
    )
}