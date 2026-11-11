
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import { carsData } from "./pages/Cars";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function Home() {
    const [contactSent, setContactSent] = useState(false);

    const handleContactSubmit = (e) => {
        e.preventDefault();
        setContactSent(true);
    };

    return (
        <>
            <section id="home" className="hero-section">
                <div className="hero-content">
                    <h1>
                        Find Your Perfect Car<br />
                        for Every Journey
                    </h1>
                    <p>
                        Choose your perfect car or SUV and enjoy an easy,
                        luxury, and comfortable rental experience.
                    </p>
                    <a href="/cars" className="btn-browse">
                        Browse Fleet
                    </a>
                </div>

                <div className="hero-image">
                    <img
                        src="https://thumbs.dreamstime.com/b/blue-sedan-car-front-three-quarter-view-isolated-transparent-background-automobile-vehicle-shiny-shown-428558764.jpg"
                        alt="Blue Sports Car"
                    />
                </div>
            </section>

            <div className="search-bar-card">
                <div className="search-field">
                    <label>Pick-up Location</label>
                    <input
                        type="text"
                        placeholder="City or Airport name"
                    />
                </div>

                <div className="search-field">
                    <label>Pick-up Date</label>
                    <input type="date" />
                </div>

                <div className="search-field">
                    <label>Return Date</label>
                    <input type="date" />
                </div>

                <a href="/cars" className="btn-search">
                    Search Vehicles
                </a>
            </div>

            <section id="about" className="about-section">
                <h2>About Us</h2>
                <p>
                    <strong>Rent n Drive</strong> is a reliable car
                    rental platform providing everything from luxury
                    sedans to heavy 4x4 Jeeps. Our mission is to make
                    your travel safe, easy, and comfortable.
                </p>
            </section>

            <section id="contact" className="contact-section">
                <h2>Contact & Reservation Support</h2>
                <p>
                    Fill out the form below for any inquiries
                    or vehicle bookings:
                </p>

                <form
                    onSubmit={handleContactSubmit}
                    className="contact-form"
                >
                    <input
                        type="text"
                        placeholder="Full Name"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        required
                    />
                    <textarea
                        rows="4"
                        placeholder="Your booking dates or inquiry details..."
                        required
                    ></textarea>
                    <button type="submit" className="btn-submit">
                        Submit Message
                    </button>
                </form>

                {contactSent && (
                    <div className="success-msg">
                        Thank you! Your message has been received.
                        We will contact you soon.
                    </div>
                )}
            </section>
        </>
    );
}

function App() {
    return (
        <div className="app-container">
            <header className="header">
                <div className="logo">Rent n Drive</div>

                <nav className="nav-links">
                    <a href="/">Home</a>
                    <a href="/cars">Cars & Jeeps</a>
                    <a href="/#about">About Us</a>
                    <a href="/#contact">Contact</a>
                </nav>

                <div className="auth-buttons">
                    <a href="/#contact" className="btn-login">
                        Login
                    </a>
                    <a href="/#contact" className="btn-signup">
                        Sign up
                    </a>
                </div>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cars" element={<Cars />} />
                <Route
                    path="/cars/:id"
                    element={<CarDetails cars={carsData} />}
                />
            </Routes>

            <footer className="footer">
                <p>
                    &copy; 2026 Rent n Drive.
                    Student Rental Project.
                </p>
            </footer>
        </div>
    );
}

export default App;
