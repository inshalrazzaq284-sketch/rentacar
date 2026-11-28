
import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="about-page">

            {/* ABOUT US SECTION */}
            <section className="about-main">

                <div className="about-info">
                    <span className="about-label">ABOUT US</span>

                    <h1>
                        Welcome to <span>Rent n Drive</span>
                    </h1>

                    <p>
                        Rent n Drive makes car rental simple,
                        comfortable and affordable. From luxury
                        Mercedes and Rolls Royce to powerful SUVs
                        and Jeeps, we help you find the perfect
                        vehicle for every journey.
                    </p>

                    <p>
                        Your comfort, safety and satisfaction
                        are always our priorities.
                    </p>

                    <Link to="/cars" className="about-btn">
                        Explore Our Cars →
                    </Link>
                </div>

                {/* CAR IMAGE */}
                <div className="about-photo">
                    <img
                        src="/Cars/car.png"
                        alt="Luxury rental car"
                    />
                </div>

            </section>

            {/* CONTACT SECTION */}
            <section className="about-contact">

                <h2>
                    Get in <span>Touch</span>
                </h2>

                <p className="about-contact-subtitle">
                    Have a question? We're here to help.
                </p>

                <div className="about-contact-grid">

                    {/* PHONE */}
                    <div className="about-contact-card">
                        <span className="contact-icon">📞</span>
                        <h3>Phone</h3>

                        <p>
                            <a href="tel:+3584089765">
                                +358 4089765
                            </a>
                        </p>
                    </div>

                    {/* EMAIL */}
                    <div className="about-contact-card">
                        <span className="contact-icon">✉️</span>
                        <h3>Email</h3>

                        <p>
                            <a href="mailto:rentacar@gmail.com">
                                rentacar@gmail.com
                            </a>
                        </p>
                    </div>

                    {/* LOCATION */}
                    <div className="about-contact-card">
                        <span className="contact-icon">📍</span>
                        <h3>Location</h3>
                        <p>Espoo, Finland</p>
                    </div>

                </div>
            </section>

            <footer className="about-bottom"></footer>

        </div>
    );
}
