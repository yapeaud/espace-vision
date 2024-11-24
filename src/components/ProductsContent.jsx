

import { useState } from "react"
import { products } from "../constants"
import Button from '../components/Button'
import { NavLink } from "react-router-dom";


// Filtrage initial
const initialFilters = {
    type: "all",
    brand: "all",
    gender: "all",
};

const ProductsContent = () => {

    const [filters, setFilters] = useState(initialFilters);

    // Fonction de filtrage des produits
    const filteredProducts = products.filter((product) => {
        return (
            (filters.type === "all" || product.type === filters.type) &&
            (filters.brand === "all" || product.brand === filters.brand) &&
            (filters.gender === "all" || product.gender === filters.gender)
        );
    });
    return (
        <div className="container my-5 pt-5">
            {/* Header */}
            <header className="text-center mb-5">
                <h1>Nos Produits</h1>
                <p className="lead">
                    Découvrez notre sélection de lunettes de vue et de soleil. Filtrez par type, marque ou genre pour trouver vos
                    montures idéales.
                </p>
            </header>

            {/* Filters Section */}
            <section className="mb-5">
                <div className="row">
                    {/* Type Filter */}
                    <div className="col-md-4 mb-3">
                        <label htmlFor="type" className="form-label">
                            Type
                        </label>
                        <select
                            id="type"
                            className="form-select"
                            value={filters.type}
                            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                        >
                            <option value="all">Tous</option>
                            <option value="vue">Lunettes de Vue</option>
                            <option value="soleil">Lunettes de Soleil</option>
                        </select>
                    </div>

                    {/* Brand Filter */}
                    <div className="col-md-4 mb-3">
                        <label htmlFor="brand" className="form-label">
                            Marque
                        </label>
                        <select
                            id="brand"
                            className="form-select"
                            value={filters.brand}
                            onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
                        >
                            <option value="all">Toutes</option>
                            <option value="Ray-Ban">Ray-Ban</option>
                            <option value="Oakley">Oakley</option>
                            <option value="Gucci">Gucci</option>
                            <option value="Chloé">Chloé</option>
                            <option value="Tom Ford">Tom Ford</option>
                        </select>
                    </div>

                    {/* Gender Filter */}
                    <div className="col-md-4 mb-3">
                        <label htmlFor="gender" className="form-label">
                            Genre
                        </label>
                        <select
                            id="gender"
                            className="form-select"
                            value={filters.gender}
                            onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
                        >
                            <option value="all">Tous</option>
                            <option value="homme">Homme</option>
                            <option value="femme">Femme</option>
                            <option value="enfant">Enfant</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="row">
                {filteredProducts.map((product) => (
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={product.id}>
                        <div className="card h-100">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="card-img-top"
                                style={{ height: "100px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text invisible">{product.description}</p>
                            </div> 
                        </div>
                    </div>
                ))}
            </section>

            {/* Call-to-Action */}
            <section className="text-center mt-5">
                <h2 className="mb-3">Un produit vous plaît ?</h2>
                <NavLink to="/contact" className="btn-lg">
                <Button label="Contactez-nous pour plus d'informations" defaultClass='btn-primary' />
                </NavLink>
            </section>
        </div>
    )
}

export default ProductsContent