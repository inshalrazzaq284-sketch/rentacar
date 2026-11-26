
import { Link } from "react-router-dom";

function CarCard({ car }) {
    return (
        <div className="car-card">

            <img
                src={car.image}
                alt={car.title}
                className="car-image"
            />

            <div className="car-info">
        <span className="car-type-badge">
          {car.type}
        </span>

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
                    <h3 className="price">{car.price}</h3>

                    <Link
                        to={`/cars/${car.id}`}
                        className="btn-book"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CarCard;
