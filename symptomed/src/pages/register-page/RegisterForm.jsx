import "./RegisterForm.css"
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

export default function RegisterForm() {
    const { register } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const validateForm = () => {
        const newErrors = [];

        //for email:
        if (!email.includes("@")) {
            newErrors.push("Email must contain '@'");
        }

        //for password:
        if (password.length < 8) {
            newErrors.push("Password must be at least 8 characters long");
        }
        if (!/[A-Z]/.test(password)) {
            newErrors.push("Password must contain at least one uppercase letter");
        }
        if (!/[a-z]/.test(password)) {
            newErrors.push("Password must contain at least one lowercase letter");
        }
        if (!/[0-9]/.test(password)) {
            newErrors.push("Password must contain at least one number");
        }
        if (!/[\W_]/.test(password)) {
            newErrors.push("Password must contain at least one special character");
        }
        return newErrors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors([]);

        const success = await register(email, password);
        if (success) {
            navigate("/user-dashboard-login");
        }
    };

    return (
        <div className="register-form-wrapper">
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="register-input-wrapper">
                    <p className="register-p">Please fill your register data:</p>
                    <div className="container-register-inputs">
                        <label htmlFor="register-email" className="register-email-label">Email:
                            <input type="email" id="register-email" value={email} className="register-email" onChange={(e) => {setEmail(e.target.value); setErrors([]); }} />
                        </label>
                        <label htmlFor="register-password" className="register-password-label">Password:
                            <input type="password" id="register-password" value={password} className="register-password" onChange={(e) => { setPassword(e.target.value); setErrors([]); }}/>
                        </label>
                    </div>
                </div>

                    {errors.length > 0 && (
                        <div>
                            <ul className="ul-validation-error">
                                {errors.map((err, index) => (
                                    <li key={index}>{err}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <button type="submit" className="home-page">
                        Register
                    </button>
            </form>
        </div>
    )
    
}