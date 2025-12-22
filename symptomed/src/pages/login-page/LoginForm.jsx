import "./LoginForm.css"
import { Link } from "react-router"

export default function LoginForm() {
    return (
        <div>
            <form action="">
                <input type="text" placeholder="name"/>
                <input type="email" placeholder="email"/>
                <br />
            <Link to="/user-dashboard-login" className="link">Submit - Login</Link>
            </form>
        </div>
    )
}