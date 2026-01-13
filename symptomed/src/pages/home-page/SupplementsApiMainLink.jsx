import "./SupplementsApiMainLink.css"
import { Link } from "react-router"

export default function SupplementsApiMainLink() {
    return (
        <section className="supplements-api-main-link">
            <div>
                <h1 className="h1-title-supplements">See supplements that may support your condition:</h1>
            </div>
            <Link to="/all-supplements" className="supplements-link"> Browse supplements </Link>
        </section>
    )
}