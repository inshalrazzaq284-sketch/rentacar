
import { useState } from "react";
import "./login.css";

function Login() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const url = isSignUp
                ? "/api/auth/signup"
                : "/api/auth/login";

            const data = isSignUp
                ? formData
                : {
                    email: formData.email,
                    password: formData.password
                };

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (!response.ok) {
                alert(result.message || "Something went wrong");
                return;
            }

            alert(result.message);

            if (isSignUp) {
                setIsSignUp(false);
                setFormData({
                    name: "",
                    email: "",
                    contact: "",
                    password: ""
                });
            } else {
                setFormData({
                    ...formData,
                    password: ""
                });
            }
        } catch (error) {
            alert("Cannot connect to server");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="page-wrapper">
            <div className="auth-card">
                <div className="brand-header">
                    <span className="car-badge">RENT A CAR</span>
                    <h2>{isSignUp ? "Create an Account" : "Welcome Back"}</h2>
                    <p className="subtitle">
                        {isSignUp
                            ? "Sign up to book your dream ride today"
                            : "Sign in to manage your car bookings"}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    {isSignUp && (
                        <>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Ali Khan"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Contact Number</label>
                                <input
                                    type="tel"
                                    name="contact"
                                    placeholder="0300-1234567"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </>
                    )}

                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            minLength={isSignUp ? 8 : undefined}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={loading}
                    >
                        {loading
                            ? "Please wait..."
                            : isSignUp
                                ? "Sign Up"
                                : "Sign In"}
                    </button>
                </form>

                <div className="switch-box">
                    <p>
                        {isSignUp
                            ? "Already have an account?"
                            : "Don't have an account?"}{" "}
                        <span onClick={() => setIsSignUp(!isSignUp)}>
                            {isSignUp ? "Sign In" : "Sign Up"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
