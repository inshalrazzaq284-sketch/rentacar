
import { useParams, Link } from "react-router-dom";

function CarDetails({ cars }) {
    const { id } = useParams();

    const car = cars.find((item) => item.id === Number(id));

    if (!car) {
        return (
            <section className="car-details-page">
                <h2>Car not found</h2>
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
                {car.specs.map((spec, index) => (
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
