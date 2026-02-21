import "./LoginPageView.css"
import "./ButtonHomePage.css"
import { Link } from "react-router"
import { useAuth } from "../context/AuthContext"

export default function LoginPageView() {
    const { user } = useAuth();

    if (user) return null; //hide if authenticated

    return (
        <div className="home-page-wrapper">
                <Link to="/login-page" className="home-page">Login</Link>
        </div>
    )
}