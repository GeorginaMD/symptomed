import "./FdaDrugCardData.css"

export default function FdaDrugCardData({ drug }) {
    if (!drug) return null;

    return (
            <div className="drug-card">
                <div className="drug-card-data">
                    <p><span className="drug-name">Drug name: </span>{drug.name}</p>
                    <p><span className="drug-purpose">Drug purpose: </span>{drug.purpose}</p>
                    <p><span className="drug-uses">Drug uses: </span>{drug.uses}</p>
                    <p><span className="drug-dosage">Drug dose: </span>{drug.dosage}</p>
                    <p><span className="warnings">Drug warnings: </span>{drug.warnings}</p>
                </div>
            </div>
    )
}
