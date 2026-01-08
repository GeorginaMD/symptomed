import "./LoginPageView.css"
import "./ButtonHomePage.css"
import { Link } from "react-router"

export default function LoginPageView() {
    return (
        <div className="home-page-wrapper">
            <Link to="/login-page" className="home-page">Login</Link>
        </div>
    )
}