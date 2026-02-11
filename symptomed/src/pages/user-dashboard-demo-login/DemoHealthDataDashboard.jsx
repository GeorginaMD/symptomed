import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext"
import "./DemoHealthDataDashboard.css"

export default function DemoHealthDataDashboard() {

    const { demoHealth, updateDemoHealth } = useUser();

    const [healthData, setHealthData] = useState(demoHealth);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (demoHealth) {
            setHealthData(demoHealth);
        }
    }, [demoHealth]);


    return (
        <div className="demo-health-data-dashboard-wrapper">
            <p className="p-demo-dashboard">Health Data</p>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-gender" className="demo-dashboard-label">GENDER</label>
                <input type="text" id="demo-user-gender" className="demo-input" value={healthData?.gender || ""} disabled={!isEditing} onChange={(e) => setHealthData({ ...healthData, gender: e.target.value})}/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-age" className="demo-dashboard-label">AGE</label>
                <input type="text" id="demo-user-age" className="demo-input" value={healthData?.age || ""} disabled={!isEditing} onChange={(e) => setHealthData({ ...healthData, age: e.target.value})}/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-weight" className="demo-dashboard-label">WEIGHT</label>
                <input type="text" id="demo-user-weight" className="demo-input" value={healthData?.weight || ""} disabled={!isEditing} onChange={(e) => setHealthData({ ...healthData, weight: e.target.value})}/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-height" className="demo-dashboard-label">HEIGHT</label>
                <input type="text" id="demo-user-height" className="demo-input" value={healthData?.height || ""} disabled={!isEditing} onChange={(e) => setHealthData({ ...healthData, height: e.target.value})}/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-sleep" className="demo-dashboard-label">SLEEP</label>
                <input type="text" id="demo-user-sleep" className="demo-input" value={healthData?.sleep || ""} disabled={!isEditing} onChange={(e) => setHealthData({ ...healthData, sleep: e.target.value})}/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-activity" className="demo-dashboard-label">PHYSICAL ACTIVITY</label>
                <input type="text" id="demo-user-activity" className="demo-input" value={healthData?.physical_activity || ""} disabled={!isEditing} onChange={(e) => setHealthData({ ...healthData, physical_activity: e.target.value})}/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-blood" className="demo-dashboard-label">BLOOD GROUP</label>
                <input type="text" id="demo-user-blood" className="demo-input" value={healthData?.blood_group || ""} disabled={!isEditing} onChange={(e) => setHealthData({ ...healthData, blood_group: e.target.value})}/>
            </div>
            <div className="health-data-btn" >
                <button type="button" className="save-health-data" onClick={() => {setIsEditing(true)}}>Edit</button>
                <button type="button" className="save-health-data" onClick={() => {updateDemoHealth(healthData); setIsEditing(false) }}>Save</button>
            </div>
        </div>
    )
}