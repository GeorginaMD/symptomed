import "./HealthDataDashboard.css"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

export default function HealthDataDashboard() {
    const { user, setUser } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [healthData, setHealthData] = useState({
        gender: "",
        age: "",
        weight: "",
        height: "",
        sleep: "",
        activity: "",
        blood: "",
    });

    useEffect(() => {
        if (user?.healthData) {
            setHealthData({
                gender: user.healthData.gender ?? "",
                age: user.healthData.age ?? "",
                weight: user.healthData.weight ?? "",
                height: user.healthData.height ?? "",
                sleep: user.healthData.sleep ?? "",
                activity: user.healthData.activity ?? "",
                blood: user.healthData.blood ?? "",
            })
        }
    },[user]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setHealthData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        try {
            const response = await fetch("https://symptomed.onrender.com/api/users/health", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(healthData),
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
        <div className="health-data-dashboard-wrapper">
            <p className="p-dashboard">Health Data</p>
            <div className="dashboard-input-wrapper">
                <label htmlFor="gender" className="dashboard-label">GENDER</label>
                <input type="text" id="gender" className="health-input" value={healthData.gender} onChange={handleChange} disabled={!isEditing} placeholder="write your gender"/>
            </div>
            <div className="dashboard-input-wrapper">
                <label htmlFor="age" className="dashboard-label">AGE</label>
                <input type="number" id="age" className="health-input" value={healthData.age} onChange={handleChange} disabled={!isEditing} placeholder="write your age"/>
            </div>
            <div className="dashboard-input-wrapper">
                <label htmlFor="weight" className="dashboard-label">WEIGHT</label>
                <input type="number" id="weight" className="health-input" value={healthData.weight} onChange={handleChange} disabled={!isEditing} placeholder="write your weight"/>
            </div>
            <div className="dashboard-input-wrapper">
                <label htmlFor="height" className="dashboard-label">HEIGHT</label>
                <input type="number" id="height" className="health-input" value={healthData.height} onChange={handleChange} disabled={!isEditing} placeholder="write your height"/>
            </div>
            <div className="dashboard-input-wrapper">
                <label htmlFor="sleep" className="dashboard-label">SLEEP</label>
                <input type="text" id="sleep" className="health-input" value={healthData.sleep} onChange={handleChange} disabled={!isEditing} placeholder="how many hours of sleep"/>
            </div>
            <div className="dashboard-input-wrapper">
                <label htmlFor="activity" className="dashboard-label">PHYSICAL ACTIVITY</label>
                <input type="number" id="activity" className="health-input" value={healthData.activity} onChange={handleChange} disabled={!isEditing} placeholder="how many days a week"/>
            </div>
            <div className="dashboard-input-wrapper">
                <label htmlFor="blood" className="dashboard-label">BLOOD GROUP</label>
                <input type="text" id="blood" className="health-input" value={healthData.blood} onChange={handleChange} disabled={!isEditing} placeholder="write your blood group"/>
            </div>
            <div className="health-data-btn">
                    <button type="button" className="save-health-data" onClick={handleEdit} >Edit</button>
                    <button type="button" className="save-health-data" onClick={handleSave} >Save</button>
            </div>
        </div>
    );
}