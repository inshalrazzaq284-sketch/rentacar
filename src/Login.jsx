import { useState } from 'react';
import './Login.css';

function Login() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            alert(`Account Created! Welcome, ${formData.name}`);
        } else {
            alert(`Welcome Back! Logged in with ${formData.email}`);
        }
    };

    return (
        <div className="page-wrapper">
            <div className="auth-card">
                <div className="brand-header">
                    <span className="car-badge">RENT A CAR</span>
                    <h2>{isSignUp ? 'Create an Account' : 'Welcome Back'}</h2>
                    <p className="subtitle">
                        {isSignUp
                            ? 'Sign up to book your dream ride today'
                            : 'Sign in to manage your car bookings'}
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
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn">
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </button>
                </form>

                <div className="switch-box">
                    <p>
                        {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                        <span onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;