import "./RegisterPageView.css"
import { Link } from "react-router"

export default function RegisterPageView() {
    return (
        <div className="home-page-wrapper">
            <Link to="/register-page" className="home-page">Register</Link>
        </div>
    )
}