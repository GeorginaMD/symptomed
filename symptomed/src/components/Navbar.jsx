import DemoPageView from "./DemoPageView"
import LoginPageView from "./LoginPageView"
import RegisterPageView from "./RegisterPageView"
import "./Navbar.css"

export default function Navbar() {
    return (
    <>
        
        <nav className="Navbar">
            <strong className="h1">SymptoMed</strong>
                <ul className="nav-ul">
                    <DemoPageView />
                    <LoginPageView />
                    <RegisterPageView />
                </ul>   
        </nav>
        <section className="home-section">
            
        </section>
    </>
    )
}