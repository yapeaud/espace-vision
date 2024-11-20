/* eslint-disable react/no-unescaped-entities */
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="bg-primary text-white py-5">
                <div className="container">
                    <div className="row">
                        {/* About Us */}
                        <div className="col-md-3">
                            <h5>À propos</h5>
                            <hr className="bg-white mb-4 mt-0 d-inline-block" style={{ width: '60px', height: '2px' }} />
                            <p>
                                Lorem ipsum dolor sit am consectetur adipiscing elit do eiusmod tempor incididunt ut labore dolore magna.
                            </p>
                            <div className="d-flex">
                                <NavLink to={""} className="text-white me-3">
                                    <i className="bi bi-facebook"></i>
                                </NavLink>
                                <NavLink to={""} className="text-white me-3">
                                    <i className="bi bi-google"></i>
                                </NavLink>
                                <NavLink to={""} className="text-white me-3">
                                    <i className="bi bi-twitter"></i>
                                </NavLink>
                                <NavLink to={""} className="text-white me-3">
                                    <i className="bi bi-vimeo"></i>
                                </NavLink>
                                <NavLink to={""} className="text-white">
                                    <i className="bi bi-pinterest"></i>
                                </NavLink>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-md-3">
                            <h5>Liens rapides</h5>
                            <hr className="bg-white mb-4 mt-0 d-inline-block" style={{ width: '60px', height: '2px' }} />
                            <ul className="list-unstyled">
                                {[
                                    { to: "/", label: "Home" },
                                    { to: "/à-propos", label: "À propos" },
                                    { to: "/services", label: "Services" },
                                    { to: "/produits", label: "Produits" },
                                    { to: "/essayage", label: "Essayage" },
                                    { to: "/contact", label: "Contact" }
                                ].map((item, index) => (
                                    <li key={index} className="hover-move">
                                        <NavLink to={item.to} className="text-white text-decoration-none d-block">
                                            <i className="bi bi-caret-right-fill"></i> {item.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        {/* Open Hours */}
                        <div className="col-md-3">
                            <h5>Périodes de disponibilité</h5>
                            <hr className="bg-white mb-4 mt-0 d-inline-block" style={{ width: '60px', height: '2px' }} />
                            <p>
                                Lorem ipsum dolor sit ame consectetur adipiscing elit do eiusmod tempor incididunt.
                            </p>
                            <ul className="list-unstyled">
                                {[
                                    { day: 'Lundi - Vendredi', hour: '8:00-17:00' },
                                    { day: 'Samedi', hour: '9:00-13:00' }
                                ].map((time, idx) => (
                                    <li key={idx}>{time.day}: {time.hour}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="col-md-3">
                            <h5>Newsletter</h5>
                            <hr className="bg-white mb-4 mt-0 d-inline-block" style={{ width: '60px', height: '2px' }} />
                            <p>
                                Abonnez-vous à notre lettre d'information pour recevoir toutes nos nouvelles dans votre boîte de réception.
                            </p>
                            <div className="input-group">
                                <input
                                    type="email"
                                    className="form-control bg-primary text-white"
                                    placeholder="E-mail"
                                    aria-label="E-mail"
                                />
                                <button className="btn btn-light text-primary" type="button">
                                    <i className="bi bi-send"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center mt-4">
                        <p className="mb-0">
                            © Copyright {new Date().getFullYear()} | Tous droits réservés {' '}
                            <NavLink to={""} className="text-white text-decoration-none">
                                Yapeaud
                            </NavLink>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer