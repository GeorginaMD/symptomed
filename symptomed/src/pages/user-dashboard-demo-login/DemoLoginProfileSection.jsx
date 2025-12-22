import "./DemoLoginProfileSection.css"
import { Link } from "react-router"
import DemoUserProfileData from "./DemoUserProfileData"
import DemoHealthDataDashboard from "./DemoHealthDataDashboard"

export default function DemoLoginProfileSection() {
    return (
        <section className="demo-login-profile-section">
            <DemoUserProfileData />
            <DemoHealthDataDashboard />
            <Link to="/" className="link">Home page</Link>
        </section>
    )
}