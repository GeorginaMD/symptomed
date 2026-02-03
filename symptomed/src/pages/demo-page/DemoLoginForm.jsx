import "./DemoLoginForm.css"
import { Link } from "react-router"
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router"
import { useContext } from "react"
import "../../components/ButtonHomePage.css"


export default function DemoLoginForm() {
    const { loginDemo } = useContext(UserContext);
    const navigate = useNavigate();

    const handleDemoLogin = (e) => {
        e.preventDefault();
        loginDemo();
        navigate("/user-dashboard-demo-login")
    }

    return (
        <div>
            <form className="demo-form" onSubmit={handleDemoLogin}>
                <label htmlFor="demo-email">Email</label>
                    <input type="email" id="demo-email" value="demo-login@symptomed.com" className="demo-email" readOnly/>
                
                <label htmlFor="demo-password">Password</label>
                    <input type="password" id="demo-password" value="demo-login2026" className="demo-password" readOnly/>
                
                <button type="submit" className="home-page">
                    Demo Login
                </button>

           {/*  <Link to="/user-dashboard-demo-login" className="link"> ? ? ?</Link> */}
            </form>
        </div>
    )
}