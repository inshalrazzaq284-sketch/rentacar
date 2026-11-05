
import './About.css';

export default function About() {
    return (
        <div className="about-page">

            <section className="about-hero">
                <h1>About Rent n Drive</h1>
                <p>
                    Your Journey, Our Responsibility.
                    Experience comfort, luxury and freedom
                    with every ride.
                </p>
            </section>

            <section className="about-content">
                <div className="about-text">
                    <h2>Who We Are</h2>

                    <p>
                        Rent n Drive is a reliable car rental
                        platform providing a wide range of
                        vehicles, from luxury sedans to powerful
                        SUVs and 4x4 Jeeps.
                    </p>

                    <p>
                        Our goal is to make every journey safe,
                        comfortable and affordable. We believe
                        renting a car should be simple and
                        stress-free.
                    </p>
                </div>

                <div className="about-image">
                    <img
                        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900"
                        alt="Luxury car"
                    />
                </div>
            </section>

            <section className="mission-section">
                <h2>Our Mission</h2>
                <p>
                    To provide customers with a smooth,
                    convenient and enjoyable car rental
                    experience through quality vehicles
                    and excellent service.
                </p>
            </section>

            <section className="why-section">
                <h2>Why Choose Us?</h2>

                <div className="why-grid">

                    <div className="why-card">
                        <h3>🚗 Wide Vehicle Selection</h3>
                        <p>
                            Choose from luxury cars, SUVs
                            and powerful Jeeps.
                        </p>
                    </div>

                    <div className="why-card">
                        <h3>💰 Affordable Prices</h3>
                        <p>
                            Enjoy quality vehicles at
                            competitive rental prices.
                        </p>
                    </div>

                    <div className="why-card">
                        <h3>🛡️ Safe & Reliable</h3>
                        <p>
                            Your safety and comfort are
                            always our priority.
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
}
