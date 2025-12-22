import "./DemoPageView.css"
import { Link } from "react-router"

export default function DemoPageView() {
    return (
        <>
            <Link to="/demo-login-page" className="link">Demo Login</Link>
        </>
        
    )
}