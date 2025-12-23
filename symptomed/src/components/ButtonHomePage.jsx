import "./ButtonHomePage.css"
import { Link } from "react-router"

export default function ButtonHomePage() {
    return (
        <div className="home-page-wrapper">
            <Link to="/" className="home-page">Home Page</Link>
        </div>
    )
}