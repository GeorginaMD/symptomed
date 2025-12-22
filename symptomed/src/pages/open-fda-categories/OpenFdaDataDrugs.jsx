import "./OpenFdaDataDrugs.css"
import { Link } from "react-router"

export default function OpenFdaDataDrugs() {
    return (
        <>
            <p>test placeholder for link fetching data results</p>
            <Link to="/open-fda-drugs" className="link"> See recommended drugs </Link>
        </>
    )
}