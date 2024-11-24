import { brands } from "../constants"

const BrandsBanner = () => {
    return (
        <>
            <div className="brands-banner-container py-4">
                <h2 className="fw-bold text-center mb-4">Nos marques de lunettes</h2>

                <div className="marquee">
                    <div className="marquee-content">
                        {brands.map((brand) => (
                            <div key={brand.id} className="marquee-item">
                                <img
                                    src={brand.imgSrc}
                                    alt={brand.imgAlt}
                                    className="img-fluid"
                                    style={{ maxHeight: "80px", objectFit: "contain" }}
                                />
                                <p className="fw-light text-center invisible">{brand.name}</p>
                            </div>
                        ))}
                        {/* Répétez les éléments pour un effet continu */}
                        {brands.map((brand) => (
                            <div key={`clone-${brand.id}`} className="marquee-item">
                                <img
                                    src={brand.imgSrc}
                                    alt={brand.imgAlt}
                                    className="img-fluid"
                                    style={{ maxHeight: "80px", objectFit: "contain" }}
                                />
                                <p className="fw-light text-center invisible">{brand.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandsBanner