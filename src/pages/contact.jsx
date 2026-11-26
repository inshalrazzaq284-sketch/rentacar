import React, { useState } from 'react';
import './contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        details: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ fullName: '', email: '', details: '' });
        }, 5000);
    };

    return (
        <div className="contact-container">
            <div className="contact-card">
                <h2>Contact & Reservation Support</h2>
                <p className="contact-subtitle">
                    Fill out the form below for any inquiries or vehicle bookings:
                </p>

                {isSubmitted && (
                    <div className="success-badge">
                        ✓ Message sent successfully! We will get back to you shortly.
                    </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="input-group">
                        <span className="input-icon">👤</span>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <span className="input-icon">✉️</span>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <span className="input-icon textarea-icon">💬</span>
                        <textarea
                            name="details"
                            placeholder="Your booking dates or inquiry details..."
                            rows="5"
                            value={formData.details}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn">
                        Submit Message
                    </button>
                </form>

                <div className="contact-footer">
                    <p>Need urgent help? Reach us directly via email at <strong>support@rentacar.com</strong></p>
                </div>
            </div>
        </div>
    );
}

export default Contact;