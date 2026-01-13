import "./Footer.css"
import { useState } from "react";
import DisclaimerModal from "./DisclaimerModal"

export default function Footer() {

    const [activeModal, setActiveModal] = useState(null);
    const openModal = (type) => setActiveModal(type);
    const closeModal = () => setActiveModal(null);

    return (
        <div className="footer-wrapper">
            <p className="medical-disclaimer">The information provided in this app is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider regarding your health.</p>
            <div className="footer-links">
                <button className="btn-link" onClick={() => openModal("privacy")}>Privacy</button>
                <button className="btn-link" onClick={() => openModal("demo")}>Demo Account</button>
                <button className="btn-link" onClick={() => openModal("sources")}>Data Sources</button>
                <button className="btn-link" onClick={() => openModal("contact")}>Contact</button>
            </div>
            
            {activeModal && (
                <DisclaimerModal type={activeModal} onClose={closeModal} />
            )}
        </div>
    )
}