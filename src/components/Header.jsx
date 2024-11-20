import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Button from '../components/Button'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
                <div className="container">
                    {/* Logo */}
                    <NavLink to={"/"} className="navbar-brand d-flex align-items-center">
                        {/* <div className="logo-icon me-2" style={{ color: "#007bff", fontSize: "1.5rem" }}>
                            <i className="bi bi-eyelasses"></i>
                        </div>*/}
                        {/* <img src="/public/logo-ev.jpg" alt="" width={90}/>*/}
                        <span>
                            <span style={{ color: "#007bff" }}>Espace</span>
                            <span style={{ color: "#000" }}>Vision</span>
                        </span>
                    </NavLink>

                    {/* Toggle Button for Small Screens */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <NavLink to={"/"} className="nav-link" style={({ isActive }) => isActive ? { color: "#007bff" } : undefined} >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/à-propos"} className="nav-link" style={({ isActive }) => isActive ? { color: "#007bff" } : undefined}>
                                    À propos
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/services"} className="nav-link" style={({ isActive }) => isActive ? { color: "#007bff" } : undefined}>
                                    Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/produits"} className="nav-link" style={({ isActive }) => isActive ? { color: "#007bff" } : undefined}>
                                    Produits
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/essayage"} className="nav-link" style={({ isActive }) => isActive ? { color: "#007bff" } : undefined}>
                                    Essayage
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/contact"} className="nav-link" style={({ isActive }) => isActive ? { color: "#007bff" } : undefined}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className="d-flex align-items-center">
                        <NavLink to={"/rendez-vous"} className="text-white">
                            <Button label="Fixer un rendez-vous" defaultClass="btn-primary"/>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header