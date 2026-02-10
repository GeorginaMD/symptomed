import "./DemoLoginProfileSection.css"
import DemoUserProfileDataDashboard from "./DemoUserProfileDataDashboard"
import DemoHealthDataDashboard from "./DemoHealthDataDashboard"
import ButtonHomePage from "../../components/ButtonHomePage"
import { useUser } from "../../context/UserContext"
import { useNavigate } from "react-router"


export default function DemoLoginProfileSection() {

    const { logout } = useUser();
    const navigate = useNavigate();
    const handleDemoLogout = () => {
        logout();
        navigate("/demo-login-page", {replace: true});
    }

    return (
        <div className="demo-login-profile-div-wrapper">
            <section className="demo-login-profile-section-wrapper">
                <div className="demo-login-profile-section">
                    <DemoHealthDataDashboard />
                    <DemoUserProfileDataDashboard />
                </div>
            </section>
            <div className="demo-login-nav-buttons">
                    <button onClick={handleDemoLogout} className="home-page">Logout</button>
                    <ButtonHomePage />
            </div>
        </div>
    )
}