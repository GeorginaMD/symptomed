import "./LoginForm.css"
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

export default function LoginForm() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await login(email, password);
        if (success) {
            navigate("/user-dashboard-login");
        }
    };

    return (
        <div className="login-form-wrapper">
            <form className="login-form" onSubmit={handleSubmit}>
                <p className="login-p">Please fill your login data:</p>
                <div className="login-input-wrapper">
                    <label htmlFor="login-email" className="login-email-label">Email:
                        <input type="email" id="login-email" value={email} className="login-email" onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <label htmlFor="login-password" className="login-password-label">Password:
                        <input type="password" id="login-password" value={password} className="login-password" onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                </div>
                <button type="submit" className="home-page">
                    Login
                </button>
            </form>
        </div>
    )
}