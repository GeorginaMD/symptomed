import "./OpenFdaApiMainLink.css"
/* import bg from "/images/supplements/backgrounds/Desktop-Lines.webp" */
import { Link } from "react-router";

export default function OpenFdaApiMainLink() {
    return (
        <section className="open-fda-main-link"> 
            <div className="titles">
                <h1 className="h1-title-fda">What`s bothering you today? What do you need relief from?</h1>
                <h2 className="h2-title-fda">Have symptoms? Choose one from the list:</h2>
            </div>
            <Link to="/open-fda-categories" className="symptoms-link"> Browse Symptoms </Link>
        </section>
    )
}