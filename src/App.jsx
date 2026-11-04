import React, { useState } from 'react';
import './App.css';

const carsData = [
  {
    id: 1,
    title: "2027 Mercedes S-Class",
    tag: "Luxury Sedan",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=500&q=80",
    description: "Ultra-smooth executive drive equipped with massage seating, dual screens, and AI navigation control.",
    specs: ["⚡ Auto", "👥 5 Seats", "⛽ Hybrid"],
    price: "€120"
  },
  {
    id: 2,
    title: "Mercedes-AMG G63 BRABUS",
    tag: "Performance SUV",
    image: "https://images.unsplash.com/photo-1520031441872-265e4ff77466?auto=format&fit=crop&w=500&q=80",
    description: "Twin-turbo V8 luxury off-roader featuring custom leather seating and active exhaust controls.",
    specs: ["⚡ Auto", "👥 5 Seats", "⛽ Petrol"],
    price: "€350"
  },
  {
    id: 3,
    title: "Rolls Royce Cullinan",
    tag: "Ultra Luxury",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=500&q=80",
    description: "Unmatched ride comfort with starlight headliner, acoustic insulation, and powerful V12 engine.",
    specs: ["⚡ Auto", "👥 4 Seats", "⛽ Petrol"],
    price: "€260"
  },
  {
    id: 4,
    title: "Tesla Model S Plaid",
    tag: "Electric EV",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=500&q=80",
    description: "Instant acceleration electric hyper-sedan with autopilot self-driving capability and 600km range.",
    specs: ["⚡ Auto", "👥 5 Seats", "🔋 Electric"],
    price: "€180"
  },
  {
    id: 5,
    title: "BMW M4 Competition",
    tag: "Sports Convertible",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=500&q=80",
    description: "High-performance twin-turbo sports coupe engineered for extreme handling and speed precision.",
    specs: ["⚡ Auto", "👥 4 Seats", "⛽ Petrol"],
    price: "€210"
  },
  {
    id: 6,
    title: "Audi RS Q8 Performance",
    tag: "Sport Crossover",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=500&q=80",
    description: "Spacious family SUV combined with supercar V8 performance and Quattro all-wheel drive stability.",
    specs: ["⚡ Auto", "👥 5 Seats", "⛽ Petrol"],
    price: "€240"
  }
];

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
      <div>
        {/* Header */}
        <header>
          <div className="logo">Rent n Drive</div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#cars">Cars</a>
            <a href="#about">About us</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="auth-buttons">
            <a href="#contact" className="btn-login">Login</a>
            <a href="#contact" className="btn-signup">Sign up</a>
          </div>
        </header>

        {/* Home Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-container">
            <div className="hero-text">
              <span className="badge">🔥 2026 Fleet Now Live</span>
              <h1>Find Your Perfect Vehicle<br/>for Every Journey</h1>
              <p>Choose from our wide collection of sports, luxury, SUVs, and electric vehicles with instant booking and 24/7 roadside assistance.</p>
              <a href="#cars" className="btn-browse">Explore Vehicles &rarr;</a>
            </div>
            <div className="hero-image">
              <div className="bg-shape"></div>
              <img src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80" alt="Blue Porsche Sports Car" />
            </div>
          </div>

          <div className="search-bar-card">
            <div className="search-field">
              <label>Pick-up Location</label>
              <input type="text" placeholder="City or Airport name" />
            </div>
            <div className="search-field">
              <label>Pick-up Date</label>
              <input type="date" />
            </div>
            <div className="search-field">
              <label>Return Date</label>
              <input type="date" />
            </div>
            <a href="#cars" className="btn-search">Search Vehicles</a>
          </div>
        </section>

        {/* Cars Section */}
        <section id="cars" className="section-container">
          <div className="section-title">
            <h2>Our Vehicle Fleet</h2>
            <p>Select your favorite ride from top international manufacturers</p>
          </div>
          <div className="cars-grid">
            {carsData.map(car => (
                <div key={car.id} className="car-card">
                  <span className="card-tag">{car.tag}</span>
                  <img src={car.image} alt={car.title} />
                  <h3>{car.title}</h3>
                  <p className="description">{car.description}</p>
                  <div className="specs">
                    {car.specs.map((spec, i) => <span key={i}>{spec}</span>)}
                  </div>
                  <div className="card-footer">
                    <p className="price">{car.price} <span>/ day</span></p>
                    <a href="#contact" className="btn-book">Rent Now</a>
                  </div>
                </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-container about-section">
          <div className="about-content">
            <span className="badge">About Our Service</span>
            <h2>Who We Are & What We Do</h2>
            <p>At <strong>Rent n Drive</strong>, we specialize in offering effortless vehicle rental services to turn your journey into a luxury experience.</p>
            <div className="about-features">
              <div className="feature-box">
                <h3>500+ Vehicles</h3>
                <p>Wide variety of sports, luxury, and electric options.</p>
              </div>
              <div className="feature-box">
                <h3>24/7 Support</h3>
                <p>Instant booking support and roadside breakdown assistance.</p>
              </div>
              <div className="feature-box">
                <h3>Zero Hidden Costs</h3>
                <p>Transparent pricing model with full insurance coverage included.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-container contact-section">
          <div className="section-title">
            <h2>Contact & Booking Support</h2>
            <p>Got questions or ready to place a reservation? Send us a message!</p>
          </div>
          <div className="contact-box">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="name@example.com" required />
              </div>
              <div className="input-group">
                <label>Selected Vehicle / Inquiry</label>
                <input type="text" placeholder="e.g., Mercedes S-Class Rental Inquiry" />
              </div>
              <div className="input-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Write your message or dates here..." required></textarea>
              </div>
              <button type="submit" className="btn-submit">Submit Inquiry</button>
            </form>
            {submitted && <div className="form-response-msg success">Thank you! Your booking inquiry has been submitted successfully.</div>}
          </div>
        </section>

        <footer>
          <p>&copy; 2026 Rent n Drive. All Rights Reserved.</p>
        </footer>
      </div>
  );
}