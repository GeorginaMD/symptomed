import { useUser } from "../../context/UserContext"
import "./DemoUserProfileDataDashboard.css"

export default function DemoUserProfileDataDashboard() {

    const { demoProfile } = useUser();

    return (
        <div className="demo-user-profile-data-wrapper">
            <p className="p-demo-dashboard">Profile Data</p>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-name" className="demo-dashboard-label">NAME</label>
                <input type="text" id="demo-user-name" className="demo-input" value={demoProfile?.name || ""} readOnly/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-email" className="demo-dashboard-label">EMAIL</label>
                <input type="email" id="demo-user-email" className="demo-input" value={demoProfile?.email || ""} readOnly/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-password" className="demo-dashboard-label">PASSWORD</label>
                <input type="password" id="demo-user-password" className="demo-input" value={demoProfile?.password || ""} readOnly/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-telephone" className="demo-dashboard-label">TELEPHONE</label>
                <input type="text" id="demo-user-telephone" className="demo-input" value={demoProfile?.telephone || ""} readOnly/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-address" className="demo-dashboard-label">ADDRESS</label>
                <input type="text" id="demo-user-address" className="demo-input" value={demoProfile?.address || ""} readOnly/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-city" className="demo-dashboard-label">CITY</label>
                <input type="text" id="demo-user-city" className="demo-input" value={demoProfile?.city || ""} readOnly/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-country" className="demo-dashboard-label">COUNTRY</label>
                <input type="text" id="demo-user-country" className="demo-input" value={demoProfile?.country || ""} readOnly/>
            </div>
            <div className="profile-data-btn">
                <button className="save-profile-data">Save</button>
                <button className="save-profile-data">Edit</button>
            </div>
        </div>
    )
}