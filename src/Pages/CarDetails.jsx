
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function CarDetails() {
    const { id } = useParams();

    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchCar() {
            try {
                setLoading(true);
                setError("");

                const response = await fetch(`/api/cars/${id}`);

                if (!response.ok) {
                    throw new Error("Car not found");
                }

                const data = await response.json();
                setCar(data);
            } catch (err) {
                setError(err.message);
                setCar(null);
            } finally {
                setLoading(false);
            }
        }

        fetchCar();
    }, [id]);

    if (loading) {
        return (
            <section className="car-details-page">
                <h2>Loading car details...</h2>
            </section>
        );
    }

    if (error || !car) {
        return (
            <section className="car-details-page">
                <h2>{error || "Car not found"}</h2>
                <Link to="/cars">Back to Cars</Link>
            </section>
        );
    }

    return (
        <section className="car-details-page">
            <Link to="/cars" className="back-link">
                ← Back to Cars
            </Link>

            <h1>{car.title}</h1>

            <img
                src={car.image}
                alt={car.title}
                className="details-image"
            />

            <h3>{car.type}</h3>

            <p>{car.description}</p>

            <h3>Specifications</h3>

            <div className="car-specs">
                {(car.specs || []).map((spec, index) => (
                    <span key={index}>{spec}</span>
                ))}
            </div>

            <h2>{car.price}</h2>

            <Link to="/cars" className="btn-details">
                Browse More Cars
            </Link>
        </section>
    );
}

export default CarDetails;
