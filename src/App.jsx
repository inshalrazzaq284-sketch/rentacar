import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './Pages/About';
import './App.css';

const carsData = [
    {
        id: 1,
        title: "2027 Mercedes S-Class",
        type: "Luxury Sedan",
        image: "https://cgmood.com/storage/previews/06-2026/282581/282581-959066.jpg",
        description: "Ultra-smooth executive drive with luxury massage seats and advanced AI controls.",
        specs: ["Automatic", "5 Seats", "Hybrid"],
        price: "€120 / day"
    },
    {
        id: 2,
        title: "Mercedes-AMG G63 BRABUS",
        type: "Heavy SUV / Jeep",
        image: "https://www.goodwood.com/globalassets/.road--racing/road/news/2023/02-feb/brabus-g/brabus-g800-4x4-studio---klein-34-1170x780.jpg?rxy=0.5,0.5",
        description: "Powerful Twin-Turbo V8 luxury off-roader with custom leather interior.",
        specs: ["Automatic", "5 Seats", "Petrol"],
        price: "€350 / day"
    },
    {
        id: 3,
        title: "Rolls Royce Cullinan",
        type: "Ultra Luxury SUV",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuBz5crKhrJDwC4ybW0wG_fvu1bYgMcJ4_OjSJ_yjegg&s=10",
        description: "Unmatched ride comfort with starlight ceiling and powerful V12 engine.",
        specs: ["Automatic", "4 Seats", "Petrol"],
        price: "€260 / day"
    },
    {
        id: 4,
        title: "Range Rover Autobiography",
        type: "Premium Off-Road SUV",
        image: "https://images.carexpert.com.au/resize/1400/-/vehicles/source-j/o/m/jomfk5aa20211027.jpg",
        description: "Iconic luxury SUV built for extreme comfort, all-terrain adventures, and prestige.",
        specs: ["Automatic", "5 Seats", "Diesel"],
        price: "€290 / day"
    },
    {
        id: 5,
        title: "Jeep Wrangler Rubicon",
        type: "4x4 Heavy Jeep",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjJGLLsdsRWetPTTCcEw9xTH8gN3oTmy_SYT_0YRu9Eg&s=10",
        description: "Ultimate rugged 4x4 Jeep engineered for severe off-road trails and open-air driving.",
        specs: ["Automatic", "4 Seats", "Petrol"],
        price: "€180 / day"
    },
    {
        id: 6,
        title: "Porsche Cayenne GTS",
        type: "Sport Performance SUV",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3XwjU5RFiPIEr6KxF0KkHPb2dDd4kbxeQxB0d2SGLVg&s=10",
        description: "High-performance sports crossover offering sharp handling and twin-turbo speed.",
        specs: ["Automatic", "5 Seats", "Hybrid"],
        price: "€230 / day"
    }
];

function Home() {
    const [booked, setBooked] = useState(false);
    const [selectedCarName, setSelectedCarName] = useState("");
    const [contactSent, setContactSent] = useState(false);

    const handleRentClick = (carTitle) => {
        setSelectedCarName(carTitle);
        setBooked(true);
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        setContactSent(true);
    };

    return (
        <div className="app-container">
            <header className="header">
                <div className="logo">Rent n Drive</div>
                <nav className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#cars">Cars & Jeeps</a>
                    <a href="/about">About Us</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div className="auth-buttons">
                    <a href="#contact" className="btn-login">Login</a>
                    <a href="#contact" className="btn-signup">Sign up</a>
                </div>
            </header>

            <section id="home" className="hero-section">
                <div className="hero-content">
                    <h1>Find Your Perfect Car<br/>for Every Journey</h1>
                    <p>Choose your perfect car or SUV and enjoy an easy, luxury, and comfortable rental experience.</p>
                    <a href="#cars" className="btn-browse">Browse Fleet</a>
                </div>
                <div className="hero-image">
                    <img
                        src="https://thumbs.dreamstime.com/b/blue-sedan-car-front-three-quarter-view-isolated-transparent-background-automobile-vehicle-shiny-shown-428558764.jpg"
                        alt="Blue Sports Car"/>
                </div>
            </section>

            <div className="search-bar-card">
                <div className="search-field">
                    <label>Pick-up Location</label>
                    <input type="text" placeholder="City or Airport name"/>
                </div>
                <div className="search-field">
                    <label>Pick-up Date</label>
                    <input type="date"/>
                </div>
                <div className="search-field">
                    <label>Return Date</label>
                    <input type="date"/>
                </div>
                <button className="btn-search">Search Vehicles</button>
            </div>

            <section id="cars" className="cars-section">
                <h2>Our Vehicle Fleet ({carsData.length} Available)</h2>
                <div className="cars-grid">
                    {carsData.map(car => (
                        <div key={car.id} className="car-card">
                            <span className="car-type-badge">{car.type}</span>
                            <img src={car.image} alt={car.title}/>
                            <h3>{car.title}</h3>
                            <p className="car-desc">{car.description}</p>

                            <div className="car-specs">
                                {car.specs.map((spec, i) => (
                                    <span key={i}>{spec}</span>
                                ))}
                            </div>

                            <div className="card-footer">
                                <p className="price">{car.price}</p>
                                <button className="btn-book" onClick={() => handleRentClick(car.title)}>Rent Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {booked && (
                    <div className="success-msg">
                        Success! Booking request for <strong>{selectedCarName}</strong> has been received successfully!
                    </div>
                )}
            </section>
            <section id="contact" className="contact-section">
                <h2>Contact & Reservation Support</h2>
                <p>Fill out the form below for any inquiries or vehicle bookings:</p>
                <form onSubmit={handleContactSubmit} className="contact-form">
                    <input type="text" placeholder="Full Name" required/>
                    <input type="email" placeholder="Email Address" required/>
                    <textarea rows="4" placeholder="Your booking dates or inquiry details..." required></textarea>
                    <button type="submit" className="btn-submit">Submit Message</button>
                </form>
                {contactSent &&
                    <div className="success-msg">Thank you! Your message has been received. We will contact you
                        soon.</div>}
            </section>

            <footer className="footer">
                <p>&copy; 2026 Rent n Drive. Student Rental Project.</p>
            </footer>
        </div>

    );
}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}
