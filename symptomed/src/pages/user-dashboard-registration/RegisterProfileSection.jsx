import "./RegisterProfileSection.css"
import UserProfileData from "../../components/UserProfileData"
import HealthDataDashboard from "../../components/HealthDataDashboard"
import ButtonHomePage from "../../components/ButtonHomePage"

export default function RegisterProfileSection() {
    return (
        <section className="register-profile-section">
            <UserProfileData />
            <HealthDataDashboard />
            <ButtonHomePage />
        </section>
    )
}