
import { useState } from "react";
import { Link } from "react-router-dom";

export const carsData = [
    {
        id: 1,
        title: "2027 Mercedes S-Class",
        type: "luxury sedan",
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

function Cars() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [selectedCarName, setSelectedCarName] = useState("");

    const filteredCars = carsData.filter((car) => {
        const matchesSearch = car.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" ||
            car.type.toLowerCase().includes(category.toLowerCase());

        return matchesSearch && matchesCategory;
    });

    const handleRentClick = (carTitle) => {
        setSelectedCarName(carTitle);
    };

    return (
        <section id="cars" className="cars-section">
            <h2>Our Vehicle Fleet ({filteredCars.length} Available)</h2>

            <div className="filter-section">
                <input
                    type="text"
                    placeholder="Search car by name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="All">All Cars</option>
                    <option value="Luxury">Luxury</option>
                    <option value="SUV">SUV</option>
                    <option value="Jeep">Jeep</option>
                </select>
            </div>

            <div className="cars-grid">
                {filteredCars.map((car) => (
                    <div key={car.id} className="car-card">
                        <span className="car-type-badge">
                            {car.type}
                        </span>

                        <img src={car.image} alt={car.title} />

                        <h3>{car.title}</h3>

                        <p className="car-desc">
                            {car.description}
                        </p>

                        <div className="car-specs">
                            {car.specs.map((spec, index) => (
                                <span key={index}>{spec}</span>
                            ))}
                        </div>

                        <div className="card-footer">
                            <p className="price">{car.price}</p>

                            <Link
                                to={`/cars/${car.id}`}
                                className="btn-details"
                            >
                                View Details
                            </Link>

                            <button
                                className="btn-book"
                                onClick={() => handleRentClick(car.title)}
                            >
                                Rent Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredCars.length === 0 && (
                <p>No cars found. Try another search.</p>
            )}

            {selectedCarName && (
                <div className="success-msg">
                    Success! Booking request for{" "}
                    <strong>{selectedCarName}</strong>{" "}
                    has been received successfully!
                </div>
            )}
        </section>
    );
}

export default Cars;
