import "./OpenFdaApiMainLink.css"
import { Link } from "react-router";
import FdaCategoriesSection from "../open-fda-categories/OpenFdaCategoriesSection";

export default function OpenFdaApiMainLink() {
    return (
        <section>
            <div className="titles">
                <h1>What`s bothering you today?</h1>
                <h1>What do you need relief from?</h1>
                <h2>What symptoms do you have? choose one from the list</h2>
            </div>
            <Link to="/open-fda-categories" className="link"> Browse symptoms </Link>
            
        </section>
    )
}