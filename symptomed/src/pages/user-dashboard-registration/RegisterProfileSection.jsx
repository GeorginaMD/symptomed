import "./RegisterProfileSection.css"
import { Link } from "react-router"
import UserProfileData from "../../components/UserProfileData"
import HealthDataDashboard from "../../components/HealthDataDashboard"

export default function RegisterProfileSection() {
    return (
        <section className="register-profile-section">
            <UserProfileData />
            <HealthDataDashboard />
            <Link to="/" className="link">Home page</Link>
        </section>
    )
}