
import Cars, { carsData } from "./Pages/Cars";
import CarDetails from "./Pages/CarDetails";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function Home() {
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

                    <Link to="/cars" className="btn-browse">
                        Browse Fleet
                    </Link>
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

                <Link to="/cars" className="btn-search">
                    Search Vehicles
                </Link>
            </div>

            <About />

            <section id="contact">
                <Contact />
            </section>
        </>
    );
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="app-container">
            <header className="header">
                <div className="logo">Rent n Drive</div>

                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/cars">Cars & Jeeps</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                <div className="auth-buttons">
                    {isLoggedIn ? (
                        <button
                            type="button"
                            className="btn-login"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link to="/login" className="btn-login">
                                Login
                            </Link>

                            <Link
                                to="/login?mode=signup"
                                className="btn-signup"
                            >
                                Sign up
                            </Link>
                        </>
                    )}
                </div>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/cars" element={<Cars />} />

                <Route
                    path="/cars/:id"
                    element={<CarDetails cars={carsData} />}
                />

                <Route
                    path="/login"
                    element={
                        isLoggedIn ? (
                            <Navigate to="/" replace />
                        ) : (
                            <Login onLogin={handleLogin} />
                        )
                    }
                />

                <Route path="/about" element={<About />} />

                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;