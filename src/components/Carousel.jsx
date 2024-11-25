import { caros } from "../constants";

const Carousel = () => {
    return (
        <>
            <div id="customCarousel" className="carousel slide pt-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {caros.map((caro, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                        >
                            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                                <div className="carousel-text text-left p-5">
                                    <p className="animate-bottom">{caro.text}</p>
                                </div>
                                <div className="carousel-image">
                                    <img
                                        src={caro.image}
                                        alt={`Slide ${index + 1}`}
                                        className="img-fluid rounded"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#customCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#customCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default Carousel;
