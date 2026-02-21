import "./RegisterForm.css"
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

export default function RegisterForm() {
    const { register } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await register(email, password);
        if (success) {
            navigate("/user-dashboard-login");
        }
    };

    return (
        <div className="register-form-wrapper">
            
            <form className="register-form" onSubmit={handleSubmit}>
                <p className="register-p">Please fill your register data:</p>
                <div className="register-input-wrapper">
                        <label htmlFor="register-email" className="register-email-label">Email:
                            <input type="email" id="register-email" value={email} className="register-email" onChange={(e) => setEmail(e.target.value)}/>
                        </label>
                        <label htmlFor="register-password" className="register-password-label">Password:
                            <input type="password" id="register-password" value={password} className="register-password" onChange={(e) => setPassword(e.target.value)}/>
                        </label>
                    </div>
                    <button type="submit" className="home-page">
                        Register
                    </button>
            </form>
        </div>
    )
    
}