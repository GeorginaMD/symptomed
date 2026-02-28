import "./LoginForm.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

export default function LoginForm() {
    const { login, user } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please enter both email and password");
            return;
        }

        const success = await login(email, password);

        if (!success) {
            setError("Login failed, please check your email and password");
            return;
        }
        setError("");
    }

        useEffect(() => {
            if (user) {
                navigate("/user-dashboard-login");
            }
        }, [user, navigate]);

    return (
        <div className="login-form-wrapper">
            <form className="login-form" onSubmit={handleSubmit}>
                <p className="login-p">Please fill your login data:</p>
                {error && <p className="login-form-error">{error}</p>}
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