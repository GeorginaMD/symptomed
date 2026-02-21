import "./ProfileDataDashboard.css"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

export default function ProfileDataDashboard() {
    const { user, setUser } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: "",
        email: "",
        password: "",
        telephone: "",
        address: "",
        city: "",
        country: "",
    });

    useEffect(() => {
        if (user?.profileData) {
            setProfileData({
                name: user.profileData.name ?? "",
                email: user.profileData.email ?? "",
                password: user.profileData.password ?? "",
                telephone: user.profileData.telephone ?? "",
                address: user.profileData.address ?? "",
                city: user.profileData.city ?? "",
                country: user.profileData.country ?? "",
            })
        }
    },[user]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setProfileData((prev) => ({
            ...prev, [id]: value,
        }));
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/users/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(profileData),
            });
            const data = await response.json();
            if (response.ok) {
                setUser(data.user);
                setIsEditing(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="profile-data-dashboard-wrapper">
            <p className="p-dashboard">Profile Data</p>
            <div className="dashboard-input-wrapper">
                <label htmlFor="name" className="dashboard-label">NAME</label>
                <input type="text" id="name" className="profile-input" value={profileData.name} onChange={handleChange} disabled={!isEditing} placeholder=" write your name"/>
            </div>
            <div className="dashboard-input-wrapper">
                <label htmlFor="email" className="dashboard-label">EMAIL</label>
                <input type="text" id="email" className="profile-input" value={profileData.email} onChange={handleChange} disabled={!isEditing} placeholder="write your email"/>
            </div>
            <div className="dashboard-input-wrapper">
                <label htmlFor="password" className="dashboard-label">PASSWORD</label>
                <input type="text" id="password" className="profile-input" value={profileData.password} onChange={handleChange} disabled={!isEditing} placeholder="write your password"/>
            </div>
            <div className="dashboard-input-wrapper">
                <label htmlFor="telephone" className="dashboard-label">TELEPHONE</label>
                <input type="text" id="telephone" className="profile-input" value={profileData.telephone} onChange={handleChange} disabled={!isEditing} placeholder="write your phone number"/>
            </div>
            <div className="dashboard-input-wrapper">
                <label htmlFor="address" className="dashboard-label">ADDRESS</label>
                <input type="text" id="address" className="profile-input" value={profileData.address} onChange={handleChange} disabled={!isEditing} placeholder="write your address"/>
            </div>
            <div className="dashboard-input-wrapper">
                <label htmlFor="city" className="dashboard-label">CITY</label>
                <input type="text" id="city" className="profile-input" value={profileData.city} onChange={handleChange} disabled={!isEditing} placeholder="write your city"/>
            </div>
            <div className="dashboard-input-wrapper">
                <label htmlFor="country" className="dashboard-label">COUNTRY</label>
                <input type="text" id="country" className="profile-input" value={profileData.country} onChange={handleChange} disabled={!isEditing} placeholder="write your country"/>
            </div>
            <div className="health-data-btn">
                <button type="button" className="save-profile-data" onClick={handleEdit} >Edit</button>
                <button type="button" className="save-profile-data" onClick={handleSave} >Save</button>
            </div>
        </div>
    )
}