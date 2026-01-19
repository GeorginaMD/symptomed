import "./DisclaimerModal.css"

export default function DisclaimerModal({ type, onClose }) {
  const content = {
    privacy: `Privacy Notice - 
        We respect your privacy. This application collects and stores only the information necessary to provide its core functionality, such as creating a user account and saving a personal health profile.
        The information you choose to provide may include general health-related data (such as symptoms, preferences, or supplement interests), but this data is not used for medical diagnosis and is not shared with third parties.Your data is used only to improve your experience within the application. You may request deletion of your account and associated data at any time. We do not sell, rent, or share your personal information with advertisers or external services.`,
    demo: `Demo Mode - 
        This application offers a demo mode with pre-filled example data so that users can explore its functionality without creating an account or providing any personal information.
        The demo data is fictional and does not represent real individuals or medical cases.`,
    sources: `Data Sources - 
        Some of the information displayed in this application is sourced from publicly available databases, including the U.S. Food and Drug Administration (OpenFDA API).
        This data is provided for informational purposes only and may not be complete, up to date, or applicable to every individual case. The application does not control or modify the original source data.`,
    contact: `Contact - 
        This application was created and is maintained by [Your Name], a web developer focused on health-related educational tools.For questions, feedback, or data-related requests, you can contact:`
  };

  return (
    <div className="modal-wrapper" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}> X </button>
        <p className="text-disclaimer">{content[type]}</p>
      </div>
    </div>
  );
}
