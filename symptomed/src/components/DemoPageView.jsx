import "./DemoPageView.css"
import "./ButtonHomePage.css"
import { Link } from "react-router"
import { useUser } from "../context/UserContext"

export default function DemoPageView() {
    const { isAuthenticated } = useUser();

    return (
        <div className="home-page-wrapper">
            { isAuthenticated ? 
                (<Link to="/user-dashboard-demo-login" className="home-page" >Dashboard</Link>) 
                : 
                (<Link to="/demo-login-page" className="home-page" title="Try the app with example data — no account needed!">Demo Login</Link>)
            }            
        </div>
    )
}