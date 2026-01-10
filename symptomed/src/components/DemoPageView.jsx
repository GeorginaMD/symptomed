import "./DemoPageView.css"
import "./ButtonHomePage.css"
import { Link } from "react-router"

export default function DemoPageView() {
    return (
        <div className="home-page-wrapper">
            <Link to="/demo-login-page" className="home-page" title="Try the app with example data — no account needed!">Demo Login</Link>
        </div>
    )
}