import { useState } from "react"
import emailjs from "emailjs-com"
import { Form, Row, Col } from "react-bootstrap";
import Button from '../components/Button'

const Planning = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [prefix, setPrefix] = useState("M.");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Configuration des paramètres pour EmailJS
        const templateParams = {
            prefix: prefix,
            firstName: firstName,
            lastName: lastName,
            email: email,
            date: selectedDate,
        };

        // Envoyer l'email avec EmailJS
        emailjs
            .send(
                "service_wh09wtv", // Remplacez par votre service ID EmailJS
                "template_9qc55gp", // Remplacez par votre template ID EmailJS
                templateParams,
                "cN-Ne9v-f7KQTGkCx" // Remplacez par votre clé publique EmailJS
            )
            .then(
                (response) => {
                    alert("Email envoyé avec succès !");
                },
                (error) => {
                    alert("Erreur lors de l'envoi de l'email : " + error.text);
                }
            );
    };

    return (
        <>
            <div className="container my-5">
                <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white">
                    <h4 className="mb-4">Prise de Rendez-vous</h4>

                    {/* Section Identifications */}
                    <Form.Group controlId="identifications" className="mb-4">
                        <Form.Label>Identifications : <span className="text-danger">*</span></Form.Label>
                        <Row>
                            <Col sm={2}>
                                <Form.Select required onChange={(e) => setPrefix(e.target.value)}>
                                    <option>M.</option>
                                    <option>Mme.</option>
                                    <option>Dr.</option>
                                </Form.Select>
                            </Col>
                            <Col sm={5}>
                                <Form.Control
                                    type="text"
                                    placeholder="Prénom"
                                    required
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </Col>
                            <Col sm={5}>
                                <Form.Control
                                    type="text"
                                    placeholder="Nom de famille"
                                    required
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </Form.Group>

                    {/* Section Calendrier */}
                    <Form.Group controlId="appointmentDate" className="mb-4">
                        <Form.Label>
                            Choisissez votre rendez-vous suivant les disponibilités : <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                            type="date"
                            required
                            onChange={(e) => setSelectedDate(e.target.value)}
                        />
                    </Form.Group>

                    {/* Section Email */}
                    <Form.Group controlId="email" className="mb-4">
                        <Form.Label>Renseignez votre E-mail : <span className="text-danger">*</span></Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="exemple@exemple.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    {/* Bouton Submit */}
                    <Button label="Fixer un rendez-vous" defaultClass="btn-secondary" className="btn-lg" />
                </Form>
            </div>
        </>
    )
}

export default Planning