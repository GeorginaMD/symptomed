import "./DemoLoginForm.css"
import { useNavigate } from "react-router"
import { useAuth } from "../../context/AuthContext"
import "../../components/ButtonHomePage.css"
import ButtonHomePage from "../../components/ButtonHomePage"


export default function DemoLoginForm() {
    const { loginDemo } = useAuth();
    const navigate = useNavigate();

    const handleDemoLogin = (e) => {
        e.preventDefault();
        loginDemo();
        navigate("/user-dashboard-demo-login")
    }

    return (
        <div>
            <div className="demo-form-wrapper">
                <form className="demo-form" onSubmit={handleDemoLogin}>
                    <p className="demo-p">This demo login lets you explore the app without creating an account.
                                    You’ll be logged in with a predefined demo user to preview the dashboard
                                    and features using example data only! You can edit the data but it will be saved only during the session, when you logout, the edits will be lost.</p>
                    <div className="demo-input-wrapper">
                        <label htmlFor="demo-email" className="demo-email-label">Email:
                            <input type="email" id="demo-email" value="demo-login@symptomed.com" className="demo-email" readOnly title="Demo data cannot be modified"/>
                        </label>
                        <label htmlFor="demo-password" className="demo-password-label">Password:
                            <input type="password" id="demo-password" value="demo-login2026" className="demo-password" readOnly title="Demo data cannot be modified"
                            />
                        </label>
                    </div>
                    <button type="submit" className="home-page">
                        Demo Login
                    </button>
                </form>
            </div>
            <ButtonHomePage />
        </div>
    )
}