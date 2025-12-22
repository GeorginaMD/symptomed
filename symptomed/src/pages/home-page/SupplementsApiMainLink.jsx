import "./SupplementsApiMainLink.css"
import { Link } from "react-router"

export default function SupplementsApiMainLink() {
    return (
        <>
            <div>
                <h1>See supplements that may support this condition:</h1>
            </div>
            <Link to="/all-supplements" className="link"> Browse supplements </Link>
            
        </>
    )
}