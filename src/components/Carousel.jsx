

const Carousel = () => {
    return (
        <>
            <div id="customCarousel" className="carousel slide pt-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {/* Slide 1 */}
                    <div className="carousel-item active">
                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                            <div className="carousel-text text-left p-5">
                                <h2 className="animate-bottom">Titre Slide 1</h2>
                                <p className="animate-bottom">
                                    Description de la première slide avec un texte qui se révèle du bas vers le haut.
                                </p>
                                {/*<div className="animate-top">
                                    <button className="btn btn-primary me-2">Action 1</button>
                                    <button className="btn btn-secondary">Action 2</button>
                                </div>*/}
                            </div>
                            <div className="carousel-image">
                                <img
                                    src="https://via.placeholder.com/600x400" // Remplace par ton URL d'image
                                    alt="Slide 1"
                                    className="img-fluid rounded"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item">
                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                            <div className="carousel-text text-left p-5">
                                <h2 className="animate-bottom">Titre Slide 2</h2>
                                <p className="animate-bottom">
                                    Description de la deuxième slide avec un texte dynamique.
                                </p>
                                {/*<div className="animate-top">
                                    <button className="btn btn-primary me-2">Action 1</button>
                                    <button className="btn btn-secondary">Action 2</button>
                                </div>*/}
                            </div>
                            <div className="carousel-image">
                                <img
                                    src="https://via.placeholder.com/600x400" // Remplace par ton URL d'image
                                    alt="Slide 2"
                                    className="img-fluid rounded"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="carousel-item">
                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                            <div className="carousel-text text-left p-5">
                                <h2 className="animate-bottom">Titre Slide 3</h2>
                                <p className="animate-bottom">
                                    Description de la troisième slide avec un effet élégant.
                                </p>
                                {/*<div className="animate-top">
                                    <button className="btn btn-primary me-2">Action 1</button>
                                    <button className="btn btn-secondary">Action 2</button>
                                </div>*/}
                            </div>
                            <div className="carousel-image">
                                <img
                                    src="https://via.placeholder.com/600x400" // Remplace par ton URL d'image
                                    alt="Slide 3"
                                    className="img-fluid rounded"
                                />
                            </div>
                        </div>
                    </div>
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
    )
}

export default Carousel