import { teamMembers } from "../constants"

const AboutContent = () => {
    return (
        <>
            <div className="container my-5 pt-5">
            {/* Header Section */}
            <header className="text-center mb-5">
                <h1>À propos de Notre Officine</h1>
                <p className="lead">
                    Depuis notre fondation en [année], nous combinons tradition et innovation pour offrir des solutions optiques
                    sur-mesure.
                </p>
            </header>

            {/* History and Values */}
            <section className="mb-5">
                <h2>Notre Histoire et Nos Valeurs</h2>
                <p>
                    Fondée en [année de création], notre officine repose sur trois valeurs clés : l’excellence du service,
                    l’innovation et la proximité humaine. Nous collaborons avec des marques responsables et proposons des
                    pratiques durables pour minimiser notre impact écologique.
                </p>
            </section>

            {/* Team Section */}
            <section className="mb-5">
                <h2>Notre Équipe</h2>
                <div className="row">
                    {teamMembers.map((member, index) => (
                        <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
                            <div className="card h-100">
                                <img
                                    src={member.image}
                                    alt={`${member.name}`}
                                    className="card-img-top"
                                    style={{ height: "250px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{member.name}</h5>
                                    <p className="card-text">
                                        <strong>{member.title}</strong>
                                    </p>
                                    <p className="card-text">{member.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Expertise Section */}
            <section className="mb-5">
                <h2>Notre Expertise en Lunetterie</h2>
                <p>
                    Nous proposons des solutions adaptées à tous les besoins : lunettes de vue, solaires, lentilles et bien plus.
                    Grâce à notre connaissance approfondie des tendances et des technologies, nous garantissons un service sur-mesure
                    répondant à vos attentes uniques.
                </p>
                <ul>
                    <li>Catalogue étendu de montures locales et internationales</li>
                    <li>Services optiques avancés (examens de vue, ajustements)</li>
                    <li>Accompagnement pour profils spécifiques (enfants, lentilles multifocales, fatigue visuelle)</li>
                </ul>
            </section>

            {/* Why Choose Us */}
            <section>
                <h2>Pourquoi Choisir [Nom de l’Officine] ?</h2>
                <p>
                    En nous choisissant, vous optez pour une expertise technique combinée à une approche humaine et
                    écoresponsable. Nous sommes là pour vous accompagner à chaque étape, de votre première consultation à
                    l’entretien de vos lunettes.
                </p>
            </section>
        </div>
        </>
    )
}

export default AboutContent