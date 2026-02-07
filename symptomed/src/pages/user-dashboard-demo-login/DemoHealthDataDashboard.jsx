import "./DemoHealthDataDashboard.css"

export default function DemoHealthDataDashboard() {
    return (
        <div className="demo-health-data-dashboard-wrapper">
            <p className="p-demo-dashboard">Health Data</p>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-age" className="demo-dashboard-label">AGE</label>
                <input type="text" id="demo-user-age" className="demo-input"/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-weight" className="demo-dashboard-label">WEIGHT</label>
                <input type="text" id="demo-user-weight" className="demo-input"/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-height" className="demo-dashboard-label">HEIGHT</label>
                <input type="text" id="demo-user-height" className="demo-input"/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-sleep" className="demo-dashboard-label">SLEEP</label>
                <input type="text" id="demo-user-sleep" className="demo-input"/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-activity" className="demo-dashboard-label">PHYSICAL ACTIVITY</label>
                <input type="select" id="demo-user-activity" className="demo-input"/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-blood" className="demo-dashboard-label">BLOOD GROUP</label>
                <input type="select" id="demo-user-blood" className="demo-input"/>
            </div>
            <div className="demo-dashboard-input-wrapper">
                <label htmlFor="demo-user-supplements" className="demo-dashboard-label">SUPPLEMENTS</label>
                <input type="textarea" id="demo-user-supplements" className="demo-input"/>
            </div>
            <div className="health-data-btn" >
                <button className="save-health-data">Save</button>
                <button className="save-health-data">Edit</button>
            </div>
        </div>
    )
}