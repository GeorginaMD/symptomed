import "./Footer.css"
import { Link } from "react-router"

export default function Footer() {
    return (
        <div>
            <p className="medical-disclaimer">The information provided in this app is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider regarding your health.</p>
            <Link to="/all-supplements" className="">Privacy</Link>
            <Link to="/all-supplements" className="">Demo Account</Link>
            <Link to="/all-supplements" className="">Contact</Link>
            <Link to="/all-supplements" className="">Data Sources</Link>
        </div>
    )
}