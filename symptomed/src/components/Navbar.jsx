import DemoPageView from "./DemoPageView"
import LoginPageView from "./LoginPageView"
import RegisterPageView from "./RegisterPageView"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router"
import "./Navbar.css"

export default function Navbar() {
    const { user, logout } = useAuth();

    const navigate = useNavigate();
    const handleLogout = async () => {
        await logout();
        navigate("/", {replace: true});
    }

    const handleDashboard = () => {
        if (user?.email === "demo-login@example.com") {
            navigate("user-dashboard-demo-login");
        } else {
            navigate("/user-dashboard-login");
        }
    };

    return (
    <div>
        <nav className="Navbar">
            <strong className="h1" title="Health Symptom Explorer">SymptoMed</strong>
            <ul className="nav-ul">
                {user && (
                    <>
                        <span className="p-login-current-user">{user.email}</span>
                        <button onClick={handleDashboard} className="home-page">Dashboard</button>
                        <button onClick={handleLogout} className="home-page">Logout</button>
                    </>
                )}
                <DemoPageView />
                <LoginPageView />
                <RegisterPageView />
            </ul>   
        </nav>
    </div>
    )
}
