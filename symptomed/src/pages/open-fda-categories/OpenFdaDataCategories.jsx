import { useState } from "react"
import "./OpenFdaDataCategories.css"
import { Link } from "react-router";

export default function OpenFdaDataCategories() {

    const [openCategory, setOpenCategory] = useState(null);

    function toggleCategory(categoryId) {
        setOpenCategory(prev => prev === categoryId ? null : categoryId);
    };

    const categories = [
        {
            id: "cold",
            name: "Cold & Allergy",
            symptoms: [
                { label: "Cough" , query: "cough" },
                { label: "Cold Symptoms" , query: "cold symptoms" },
                { label: "Nasal Congestion" , query: "nasal congestion" },
                { label: "Runny Nose" , query: "runny nose" },
                { label: "Sore Throat" , query: "sore throat" },
                { label: "Allergy Relief" , query: "allergy relief" },
            ]
        },
        {
            id: "digestive",
            name: "Digestive Issues",
            symptoms: [
                { label: "Upset Stomach" , query: "upset stomach" },
                { label: "Nausea" , query: "nausea" },
                { label: "Diarrhea" , query: "diarrhea" },
                { label: "Constipation" , query: "constipation" },
                { label: "Stomach Acid" , query: "stomach acid" },
                { label: "Gas Relief" , query: "gas relief" },
            ]
        },
        {
            id: "pain",
            name: "Pain & Inflammation",
            symptoms: [
                { label: "Pain Relief" , query: "pain relief" },
                { label: "Headache" , query: "headache" },
                { label: "Muscle Pain" , query: "muscle pain" },
                { label: "Joint Pain" , query: "joint pain" },
                { label: "Back Pain" , query: "back pain" },
                { label: "Menstrual Pain" , query: "menstrual pain" },
                { label: "Fever Reducer" , query: "fever reducer" },
            ]
        },
        {
            id: "sleep",
            name: "Sleep & Energy",
            symptoms: [
                { label: "Sleep Aid" , query: "sleep aid" },
                { label: "Insomnia" , query: "insomnia" },
            ]
        },
        {
            id: "skin",
            name: "Skin Conditions",
            symptoms: [
                { label: "Rash" , query: "rash" },
                { label: "Dry Skin" , query: "dry skin" },
                { label: "Acne" , query: "acne" },
                { label: "Sunburn" , query: "sunburn" },
                { label: "Cuts" , query: "cuts" },
                { label: "Burns" , query: "burns" },
                { label: "Antiseptic" , query: "antiseptic" },
            ]
        },
        {
            id: "eye",
            name: "Eye & Ear",
            symptoms: [
                { label: "Dry Eyes" , query: "dry eyes" },
                { label: "Eye Redness" , query: "eye redness" },
                { label: "Ear Ache" , query: "ear ache" },
            ]
        },
        {
            id: "aid",
            name: "First Aid",
            symptoms: [
                { label: "Wound Care" , query: "wound care" },
                { label: "Insect Bite" , query: "insect bite" },
                { label: "Antiseptic" , query: "antiseptic" },
                { label: "Burn Relief" , query: "burn relief" },
            ]
        }
    ]
 
    return (
        <div className="categories-wrapper">
        {categories.map(category => ( 
            <div className="category-block" key={category.id}>
                <button className="drug-category" onClick={() => toggleCategory(category.id)}>
                    <img src={`/images/drugs/${category.name.replace(/ & | /g, "-")}.webp`} alt="" className="drug-image"/>
                    <h2 className="category-name">{category.name}</h2>
                </button>
            {openCategory === category.id && (
                <div className="symptoms-block">
                {category.symptoms.map(symptom => (
                    <Link key={symptom.query} to={`/open-fda-drugs/${symptom.query}`} className="symptom-link">
                        {symptom.label}
                    </Link>
                ))}
                </div>
            )}
            </div>
        ))
        }
        </div>
    )
}



            {/* <button className="drug-category" onClick={() => toggleCategory("")}>
                <img src="./images/drugs/Cold-Allergy.webp" alt="" className="drug-image"/>
                <h2 className="category-name">Cold & Allergy</h2>
            </button>
            <button className="drug-category" onClick={() => toggleCategory("")}>
                <img src="./images/drugs/Digestive-Issues.webp" alt="" className="drug-image"/>
                <h2 className="category-name">Digestive Issues</h2>
            </button>
            <button className="drug-category" onClick={() => toggleCategory("")}>
                <img src="./images/drugs/Pain-Inflamation.webp" alt="" className="drug-image"/>
                <h2 className="category-name">Pain & Inflamation</h2>
            </button>
            <button className="drug-category" onClick={() => toggleCategory("")}>
                <img src="./images/drugs/Sleep-Energy.webp" alt="" className="drug-image"/>
                <h2 className="category-name">Sleep & Energy</h2>
            </button>
            <button className="drug-category" onClick={() => toggleCategory("")}>
                <img src="./images/drugs/Skin-Conditions.webp" alt="" className="drug-image"/>
                <h2 className="category-name">Skin Conditions</h2>
            </button>
            <button className="drug-category" onClick={() => toggleCategory("")}>
                <img src="./images/drugs/Eye-Ear.webp" alt="" className="drug-image"/>
                <h2 className="category-name">Eye & Ear</h2>
            </button>
            <button className="drug-category" onClick={() => toggleCategory("")}>
                <img src="./images/drugs/First-Aid.webp" alt="" className="drug-image"/>
                <h2 className="category-name">First Aid</h2>
            </button> */}
        


/* {openCategory === "cold" && (
                <div>
                    {categories.find(c => c.id === "cold").symptoms.map(symptom => (
                        <Link to={`/open-fda-drugs`} key={symptom.query}>
                            {symptom.label}
                        </Link>
                    ))}
                </div>
            )} */