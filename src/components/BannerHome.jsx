import { productsBanner } from '../constants';

const BannerHome = () => {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    {productsBanner.map((product) => (
                        <div
                            key={product.id}
                            className="col-sm-6 col-md-3 text-center d-flex flex-column align-items-center"
                        >
                            <img
                                src={product.image}
                                alt={product.als}
                                className="img-fluid mb-3"
                                style={{ maxHeight: "150px", objectFit: "contain" }}
                            />
                            <h5 className="mb-2">{product.title}</h5>
                            <p className="text-muted">{product.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BannerHome