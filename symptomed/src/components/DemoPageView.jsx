import "./DemoPageView.css"
import "./ButtonHomePage.css"
import { Link } from "react-router"
import { useAuth } from "../context/AuthContext"

export default function DemoPageView() {
    const { user } = useAuth();
    
    if (user) return null;
    
    return (
        <div className="home-page-wrapper">
            <Link to="/demo-login-page" className="home-page" title="Try the app with example data — no account needed!">Demo Login</Link>
        </div>
    )
}