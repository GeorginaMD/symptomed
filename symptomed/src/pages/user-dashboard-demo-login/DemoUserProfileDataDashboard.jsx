import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext"
import "./DemoUserProfileDataDashboard.css"

export default function DemoUserProfileDataDashboard() {

    const { demoProfile, updateDemoProfile } = useUser();

    const [profileData, setProfieData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (demoProfile) {
            setProfieData(demoProfile)
        }
    }, [demoProfile]);
    

    return (
        <div className="demo-user-profile-data-wrapper">
            <p className="p-demo-dashboard">Profile Data</p>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-name" className="demo-dashboard-label">NAME</label>
                <input type="text" id="demo-user-name" className="demo-input" value={profileData?.name || ""} disabled={!isEditing} onChange={(e) => {setProfieData({...profileData, name: e.target.value})}}/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-email" className="demo-dashboard-label">EMAIL</label>
                <input type="email" id="demo-user-email" className="demo-input" value={profileData?.email || ""} disabled={!isEditing} onChange={(e) => {setProfieData({...profileData, email: e.target.value})}}/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-password" className="demo-dashboard-label">PASSWORD</label>
                <input type="password" id="demo-user-password" className="demo-input" value={profileData?.password || ""} disabled={!isEditing} onChange={(e) => {setProfieData({...profileData, password: e.target.value})}}/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-telephone" className="demo-dashboard-label">TELEPHONE</label>
                <input type="text" id="demo-user-telephone" className="demo-input" value={profileData?.telephone || ""} disabled={!isEditing} onChange={(e) => {setProfieData({...profileData, telephone: e.target.value})}}/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-address" className="demo-dashboard-label">ADDRESS</label>
                <input type="text" id="demo-user-address" className="demo-input" value={profileData?.address || ""} disabled={!isEditing} onChange={(e) => {setProfieData({...profileData, address: e.target.value})}}/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-city" className="demo-dashboard-label">CITY</label>
                <input type="text" id="demo-user-city" className="demo-input" value={profileData?.city || ""} disabled={!isEditing} onChange={(e) => {setProfieData({...profileData, city: e.target.value})}}/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-country" className="demo-dashboard-label">COUNTRY</label>
                <input type="text" id="demo-user-country" className="demo-input" value={profileData?.country || ""} disabled={!isEditing} onChange={(e) => {setProfieData({...profileData, country: e.target.value})}}/>
            </div>
            <div className="profile-data-btn">
                <button type="button" className="save-profile-data" onClick={() => {setIsEditing(true)}}>Edit</button>
                <button type="button" className="save-profile-data" onClick={() => {updateDemoProfile(profileData); setIsEditing(false)}}>Save</button>
            </div>
        </div>
    )
}