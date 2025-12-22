import "./RegisterForm.css"
import { Link } from "react-router"

export default function RegisterForm() {
    return (
        <div>
            <h2>Please fill your register data:</h2>
            <form action="">
                <input type="text" placeholder="name"/>
                <input type="email" placeholder="email"/>
                <br />
            <Link to="/user-dashboard-registration" className="link">Submit - Register</Link>
            </form>
        </div>
    )
    
}