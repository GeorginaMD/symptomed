import "./DemoLoginProfileSection.css"
import DemoUserProfileData from "./DemoUserProfileData"
import DemoHealthDataDashboard from "./DemoHealthDataDashboard"
import ButtonHomePage from "../../components/ButtonHomePage"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router"


export default function DemoLoginProfileSection() {

    const { logout } = useContext(UserContext);
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
                    <DemoUserProfileData />
                </div>
            </section>
            <div className="demo-login-nav-buttons">
                    <button onClick={handleDemoLogout} className="home-page">Logout</button>
                    <ButtonHomePage />
            </div>
        </div>
    )
}