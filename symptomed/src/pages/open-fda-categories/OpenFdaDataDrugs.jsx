import "./OpenFdaDataDrugs.css"
import { Link } from "react-router"

export default function OpenFdaDataDrugs() {
    return (
        <div className="fetching-data-links">
            <Link to="/open-fda-drugs" className="link"> See recommended drugs </Link>
        </div>
    )
}