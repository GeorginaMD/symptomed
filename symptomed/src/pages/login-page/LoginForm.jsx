import "./LoginForm.css"
import { Link } from "react-router"

export default function LoginForm() {
    return (
        <div className="login-form-wrapper">
            <form action="" className="login-form">
                <p className="login-p">Please fill your login data:</p>
                <div className="login-input-wrapper">
                    <label htmlFor="login-email" className="login-email-label">Email:
                        <input type="email" id="login-email" value="" className="login-email"/>
                    </label>
                    <label htmlFor="login-password" className="login-password-label">Password:
                        <input type="password" id="login-password" value="" className="login-password"/>
                    </label>
                </div>
                <button type="submit" className="home-page">
                    Login
                </button>
                <br />
            <Link to="/user-dashboard-login" className="link">Submit - Login</Link>
            </form>
        </div>
    )
}