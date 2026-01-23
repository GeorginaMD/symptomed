import DemoPageView from "./DemoPageView"
import LoginPageView from "./LoginPageView"
import RegisterPageView from "./RegisterPageView"
import "./Navbar.css"

export default function Navbar() {
    return (
    <div>
        <nav className="Navbar">
            <strong className="h1" /* title="Try the app with example data — no account needed!" */>SymptoMed</strong>
            <ul className="nav-ul">
                <DemoPageView />
                <LoginPageView />
                <RegisterPageView />
            </ul>   
        </nav>
    </div>
    )
}