/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import emailjs from "emailjs-com"
import Button from '../components/Button'

const ContactContent = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    {/*const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);*/}
        const handleSubmit = () => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                alert("Envoyé !");
            }, 2000); // Simule un délai
        

        // Envoyer l'email avec EmailJS
        emailjs
            .send(
                "service_wh09wtv", // Remplacez par votre ID de service
                "template_9qc55gp", // Remplacez par votre ID de modèle
                {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    message: formData.message,
                },
                "cN-Ne9v-f7KQTGkCx" // Remplacez par votre clé publique EmailJS
            )
            .then(
                (response) => {
                    alert("Votre message a été envoyé avec succès !");
                    setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        message: "",
                    });
                    setLoading(false);
                },
                (error) => {
                    alert("Une erreur s'est produite. Veuillez réessayer.");
                    setLoading(false);
                }
            );
    };

    return (
        <>
            <div className="container my-5 pt-5">
                <header className="text-center mb-5">
                    <h1>Contactez-nous</h1>
                    <p className="lead">
                        Une question ? Besoin d'informations supplémentaires ? Remplissez le formulaire ou utilisez nos coordonnées
                        pour nous joindre.
                    </p>
                </header>
                <section className="mb-5">
                    <h2>Formulaire de Contact</h2>
                    <form /*onSubmit={handleSubmit}*/onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="firstName" className="form-label">
                                    Prénom
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="lastName" className="form-label">
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">
                                Message
                            </label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        {/*<button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? "Envoi en cours..." : "Envoyer"}
                        </button>*/}
                        <Button
                isLoading={loading}
                label="Contactez-nous pour plus d'informations"
                defaultClass="btn-primary"
                loadingText="Envoi en cours..."
            />
                    </form>
                </section>

                     {/* Contact Details */}
            <section className="mb-5">
                <h2>Nos Coordonnées</h2>
                <div className="row">
                    <div className="col-md-6">
                        <h4>Adresse</h4>
                        <p>Rue des Jardins, Carrefour Paul (ex PAKO)-Cocody II Plateaux, Abidjan, RCI</p>
                        <h4>Téléphone</h4>
                        <p><a href="tel:+225 2722410383">+225 27 2241 0383</a></p>
                        <h4>Email</h4>
                        <p><a href="mailto:espacevision@yahoo.fr">espacevision@yahoo.fr</a></p>
                    </div>
                    <div className="col-md-6">
                        <h4>Horaires d'ouverture</h4>
                        <ul className="list-unstyled">
                        {[
                                    { day: 'Lundi - Vendredi', hour: '8:00-17:00' },
                                    { day: 'Samedi', hour: '9:00-13:00' }
                                ].map((time, idx) => (
                                    <li key={idx}>{time.day}: {time.hour}</li>
                                ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Google Maps */}
            <section className="mb-5">
                <h2>Nous trouver</h2>
                <div className="ratio ratio-16x9">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1986.1697538417377!2d-3.992453177046088!3d5.365073917219255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ebe66545af37%3A0x4a2aa47f4d72ebdd!2sESPACE%20VISION%20COTE%20D&#39;IVOIRE!5e0!3m2!1sfr!2sci!4v1732528351234!5m2!1sfr!2sci" 
                        width="600" 
                        height="450" 
                        allowfullscreen="" 
                        loading="lazy" 
                    >
                    </iframe>
                </div>
            </section>

            {/* Social Media Links */}
            <section className="text-center">
                <h2>Suivez-nous</h2>
                <div className="d-flex justify-content-center gap-4 mt-3">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                        Facebook
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger">
                        Instagram
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info">
                        Twitter
                    </a>
                </div>
            </section>
            </div>
        </>
    );
};

export default ContactContent
