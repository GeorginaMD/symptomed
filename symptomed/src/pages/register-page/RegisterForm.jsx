import "./RegisterForm.css"
import { Link } from "react-router"

export default function RegisterForm() {
    return (
        <div className="register-form-wrapper">
            
            <form action="" className="register-form">
                <p className="register-p">Please fill your register data:</p>
                <div className="register-input-wrapper">
                        <label htmlFor="register-email" className="register-email-label">Email:
                            <input type="email" id="register-email" value="" className="register-email"/>
                        </label>
                        <label htmlFor="register-password" className="register-password-label">Password:
                            <input type="password" id="register-password" value="" className="register-password"/>
                        </label>
                    </div>
                    <button type="submit" className="home-page">
                        Register
                    </button>
                <br />
            <Link to="/user-dashboard-registration" className="link">Submit - Register</Link>
            </form>
        </div>
    )
    
}