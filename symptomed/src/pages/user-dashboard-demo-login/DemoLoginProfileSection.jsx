import "./DemoLoginProfileSection.css"
import DemoUserProfileDataDashboard from "./DemoUserProfileDataDashboard"
import DemoHealthDataDashboard from "./DemoHealthDataDashboard"
import ButtonHomePage from "../../components/ButtonHomePage"

export default function DemoLoginProfileSection() {

    return (
        <div className="demo-login-profile-div-wrapper">
            <section className="demo-login-profile-section-wrapper">
                <div className="demo-login-profile-section">
                    <DemoHealthDataDashboard />
                    <DemoUserProfileDataDashboard />
                </div>
            </section>
            <div className="demo-login-nav-buttons">
                    <ButtonHomePage />
            </div>
        </div>
    )
}