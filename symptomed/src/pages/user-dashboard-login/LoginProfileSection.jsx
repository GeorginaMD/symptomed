import HealthDataDashboard from "../../components/HealthDataDashboard"
import UserProfileData from "../../components/UserProfileData"
import "./LoginProfileSection.css"
import { Link } from "react-router"

export default function LoginProfileSection() {
    return (
        <section className="login-profile-section">
            <UserProfileData />
            <HealthDataDashboard />
            <Link to="/" className="link">Home page</Link>
        </section>
    )
}