import "./OpenFdaDataDrugs.css"
import { Link } from "react-router"
import { useParams } from "react-router";
import { useState, useEffect } from "react"
import FdaDrugsSection from "../open-fda-drugs/FdaDrugsSection";

const BASE_URL = "https://api.fda.gov/drug/label.json";

function normalizeDrug(drug) {
    return {
        name: drug.openfda?.brand_name?.[0] ?? drug.spl_product_data_elements?.[0] ?? drug.package_label_principal_display_panel?.[0] ?? "Unknown drug name or inexistent in our database.",
        purpose: drug.purpose?.[0] ?? "The purpose of this drug is not specified.",
        uses: drug.indications_and_usage?.[0] ?? "The uses of this drugs are not specified.",
        warnings: drug.warnings?.[0] ?? drug.do_not_use?.[0] ?? "No warnings listed for this drug.",
        dosage: drug.dosage_and_administration?.[0] ?? "See label or package leaflet.",
    };
}

//helper func. - outside, not recreated on every render inside useEffect
//and not inside JSX, which should only consume data, not transform.
export default function OpenFdaDataDrugs() {
    const { query } = useParams();
    const [drugs, setDrugs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] =useState(null);


    useEffect(() =>{
        if (!query) return;

        const fetchDrugs = async () => {
            setLoading(true);
            setError(null);
        
            try {
                    const url = `${BASE_URL}?search=purpose:${query}+NOT+homeopatic&limit=10`;
                    const res = await fetch(url);

                    if (!res.ok) { throw new Error("No drugs found for this symptom.");}

                    const data = await res.json();
                    const normalized = data.results?.map(normalizeDrug) ?? [];

                    setDrugs(normalized);

                    if (normalized.length === 0) {
                    throw new Error("No matching drugs available.");
                    }
            } catch (err) { 
                    setError(err.message); 
            } finally {
                    setLoading(false);
            }
        };

        fetchDrugs();
    }, [query]);
        

    if (!query) return null;
    if (loading) return <p className="loading-drugs">Loading drugs, please wait...</p>;
    if (error) return <p className="error-drugs">{error}</p>;


    return (
        <div className="fetching-data-links">
            {/* if (error) {
                return (
                <div className="error-drugs">
                    <h3>We couldn’t find any results</h3>
                        <p>{error}</p>
                    <p>Try another symptom.</p>
                </div>
                );
                } */}
            <FdaDrugsSection drugs={drugs}/>
        </div>
    )
}
