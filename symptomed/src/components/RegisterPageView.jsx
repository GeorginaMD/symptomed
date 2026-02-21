import "./RegisterPageView.css"
import { Link } from "react-router"
import { useAuth } from "../context/AuthContext"

export default function RegisterPageView() {
    const { user } = useAuth();

    if (user) return null; //hide if authenticated

    return (
        <div className="home-page-wrapper">
            <Link to="/register-page" className="home-page">Register</Link>
        </div>
    )
}