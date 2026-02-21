import "./LoginProfileSection.css"
import HealthDataDashboard from "./HealthDataDashboard"
import ProfileDataDashboard from "./ProfileDataDashboard"
import ButtonHomePage from "../../components/ButtonHomePage"

export default function LoginProfileSection() {

    return (
        <div className="login-profile-div-wrapper">
            <section className="login-profile-section-wrapper">
                <div className="login-profile-section">
                    <HealthDataDashboard />
                    <ProfileDataDashboard />
                </div>
            </section>
            <div className="login-nav-buttons">
                <ButtonHomePage />
            </div>
        </div>
    )
}

