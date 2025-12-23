import "./DemoLoginProfileSection.css"
import DemoUserProfileData from "./DemoUserProfileData"
import DemoHealthDataDashboard from "./DemoHealthDataDashboard"
import ButtonHomePage from "../../components/ButtonHomePage"

export default function DemoLoginProfileSection() {
    return (
        <section className="demo-login-profile-section">
            <DemoUserProfileData />
            <DemoHealthDataDashboard />
            <ButtonHomePage />
        </section>
    )
}