import { services } from "../constants"
import { NavLink } from 'react-router-dom'
import Button from '../components/Button'

const ServicesContent = () => {
    return (
        <div className="container my-5 pt-5">
            {/* Header Section */}
            <header className="text-center mb-5">
                <h1>Nos Services</h1>
                <p className="lead">
                    Découvrez nos prestations complètes, alliant expertise technique et équipements modernes, pour répondre à tous
                    vos besoins visuels.
                </p>
            </header>

            {/* Services Section */}
            <section>
                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-sm-12 col-md-6 mb-4" key={index}>
                            <div className="card h-100">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="card-img-top"
                                    style={{ height: "250px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{service.title}</h5>
                                    <p className="card-text">{service.description}</p>
                                    <ul className="list-group list-group-flush">
                                        {service.details.map((detail, idx) => (
                                            <li className="list-group-item" key={idx}>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="text-center mt-5">
                <h2 className="mb-3">Besoin d’un accompagnement personnalisé ?</h2>
                <p className="lead">
                    Prenez rendez-vous avec l’un de nos opticiens ou consultez nos experts pour découvrir la solution visuelle
                    idéale.
                </p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                <NavLink to={"/rendez-vous"} className="btn-lg text-white">
                    <Button label='Fixer un rendez-vous' defaultClass='btn-primary' />
                </NavLink>
            </section>
        </div>
    )
}                                                                                                                                                                                                                                                                       

export default ServicesContent;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 