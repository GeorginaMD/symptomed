import "./LoginPageView.css"
import { Link } from "react-router"

export default function LoginPageView() {
    return (
        <>
            <Link to="/login-page" className="link">Login</Link>
        </>
    )
}