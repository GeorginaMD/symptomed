import "./DemoLoginForm.css"
import { Link } from "react-router"

export default function DemoLoginForm() {
    return (
        <div>
            <form action="">
                <input type="text" placeholder="name"/>
                <input type="email" placeholder="email"/>
                <br />
            <Link to="/user-dashboard-demo-login" className="link">Demo - Login</Link>
            </form>
        </div>
    )
}