import "./OpenFdaDataDrugs.css"
import { Link } from "react-router"
import { useParams } from "react-router";
import { useState, useEffect } from "react"
import FdaDrugsSection from "../open-fda-drugs/FdaDrugsSection";

const BASE_URL = "https://api.fda.gov/drug/label.json";

function normalizeDrug(drug) {
    return {
        name: drug.openfda?.brand_name?.[0] ?? drug.spl_product_data_elements?.[0] ?? drug.package_label_principal_display_panel?.[0] ?? "Unknown",
        purpose: drug.purpose?.[0] ?? "Not specified",
        uses: drug.indications_and_usage?.[0] ?? "Not specified",
        warnings: drug.warnings?.[0] ?? drug.do_not_use?.[0] ?? "No warnings listed",
        dosage: drug.dosage_and_administration?.[0] ?? "See label",
    };
}

//helper func. - outside, not recreated on every render inside useEffect
//and not inside JSX, which should only consume data, not transform.
export default function OpenFdaDataDrugs() {
    const { query } = useParams();
    const [drugs, setDrugs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] =useState(null);


    useEffect(() =>{
        if (!query) return;

        const url = `${BASE_URL}?search=purpose:${query}+NOT+homeopatic&limit=10`;

        setLoading(true);
        setError(null);

        fetch(url)      
        .then(res => {
            if (!res.ok) { throw new Error("No results found");}
            return res.json();})
        .then(data => {
            const normalized = data.results?.map(normalizeDrug).filter(Boolean) ?? [];
            setDrugs(normalized);
        })
        .catch(err => setError(err.message))
        .finally(() => setLoading(false))
    }, [query]);

     console.log(drugs);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

   

    return (
        <div className="fetching-data-links">
            <FdaDrugsSection drugs={drugs}/>
        </div>
    )
}
