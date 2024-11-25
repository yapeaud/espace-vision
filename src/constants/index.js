import {
    lh1,
    lh2,
    lh3,
    lh4,
    lh5,
    lf1,
    lf2,
    lf3,
    lf4,
    lf5,
    le1,
    le2,
    le3,
    le4,
    le5,
    le6,
    sm1,
    sm2,
    sm3,
    sf1,
    sf2,
    sf3,
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
    brand10,
    //brand11,
    //brand12,
    //brand13,
    //brand14,
    //brand15,
    caro1,
    caro2,
    caro3,
    cv,
    ma,
    lc,
    l1,
    l2,
    l3
} from '../assets'

export const caros = [
    {
        id: 1,
        alt: "caro1",
        image: caro1,
        text:"Choisissez l'excellence pour vos achats avec notre cabinet !"
    },
    {
        id: 2,
        alt: "caro2",
        image: caro2,
        text:"Voyez mieux, soyez remarqué ! Faites confiance à Espace Vision."
    },
    {
        id: 3,
        alt: "caro3",
        image: caro3,
        text:"Nous avons tout ce qu’il faut pour répondre à vos besoins et réaliser vos envies !"
    },
]



export const productsBanner = [
    {
        id: 1,
        title: "Lunettes de vue",
        alt: "Lunettes de vue classiques marron foncé",
        image: l1,
        description: "Monture carrée, marron foncé, avec verres transparents.",
    },
    {
        id: 2,
        title: "Lunettes de soleil",
        alt: "Lunettes de soleil au motif marbré",
        image: l2,
        description: "Monture marbrée avec verres dégradés.",
    },
    {
        id: 3,
        title: "Lunettes prémontées",
        alt: "Lunettes prémontées métalliques dorées",
        image: l3,
        description: "Monture fine, métallique dorée avec détails roses.",
    },
    {
        id: 4,
        title: "Lentilles",
        alt: "Boîte de lentilles ACUVUE",
        image: lc,
        description: "Boîte de lentilles de contact ACUVUE.",
    },
];

export const brands = [
    {
        id: 1,
        name: "Ray.Ban",
        image: brand1,
        alt: "Logo Ray.Ban"
    },
    {
        id: 2,
        name: "Guess",
        image: brand2,
        alt: "Logo Saint Laurent"
    },
    {
        id: 3,
        name: "Chloé",
        image: brand3,
        alt: "Logo Chloé"
    },
    {
        id: 4,
        name: "Tom Ford",
        image: brand4,
        alt: "Logo Tom Ford"
    },
    {
        id: 5,
        name: "Oakley",
        image: brand5,
        alt: "Logo Oakley"
    },
    {
        id: 6,
        name: "Polaroid",
        image: brand6,
        alt: "Logo Polaroid"
    },
    {
        id: 7,
        name: "Persol",
        image: brand7,
        alt: "Logo Persol"
    },
    {
        id: 8,
        name: "Carrere",
        image: brand8,
        alt: "Logo Carrera"
    },
    {
        id: 9,
        name: "Vogue",
        image: brand9,
        alt: "Logo "
    },
    {
        id: 10,
        name: "Tommy",
        image: brand10,
        alt: "Logo "
    },
];

export const blocks = [
    {
        id: 1,
        title: "Accompagner",
        description:
            "Nous conseillons et aidons nos clients à protéger leur vue en proposant des offres et services adaptés. Notre priorité est un accompagnement personnalisé et une relation de confiance.",
    },
    {
        id: 2,
        title: "Garantir",
        description:
            "Nous mettons en avant la qualité de nos services avec des opticiens diplômés, encadrés et certifiés. Votre satisfaction repose sur notre professionnalisme et notre sérieux.",
    },
    {
        id: 3,
        title: "S'engager",
        description:
            "Nous nous engageons dans trois domaines : la recherche pour des solutions innovantes, la solidarité via des opérations sociales, et l'environnement en limitant notre impact écologique.",
    },
];

{/*export const teamMembers = [
    {
        name: "Prénom Nom",
        title: "Opticien(ne) diplômé(e)",
        description: "Fort(e) de 10 ans d’expérience, spécialisé(e) en ajustement des montures pour visages atypiques.",
        image: "/images/img1.jpg",
    },
    {
        name: "Prénom Nom",
        title: "Contactologue expert(e)",
        description: "Passionné(e) par les solutions modernes comme les lentilles progressives.",
        image: "/images/img2.jpg",
    },
    {
        name: "Prénom Nom",
        title: "Spécialiste en ajustement personnalisé",
        description: "Reconnu(e) pour son œil de designer, harmonisant lunettes et style.",
        image: "/images/img3.jpg",
    },
];*/}

export const services = [
    {
        title: "Consultation Visuelle",
        description:
            "Nos opticiens experts réalisent des consultations complètes : examens de vue, ajustements pour lentilles, et dépistages pour garantir votre santé visuelle.",
        details: [
            "Examen de vue",
            "Examen lentille",
            "Dépistage visuel complet",
            "Auto refracto",
            "Tension oculaire",
            "Topographie",
        ],
        image: cv,
    },
    {
        title: "Montage et Ajustement",
        description:
            "Nous offrons un service sur-mesure pour ajuster vos lunettes et concevoir des verres optiques parfaitement adaptés à vos besoins.",
        details: ["Ajustement des lunettes", "Conception des verres optiques"],
        image: ma,
    },
];

export const products = [
    {
        id: 1,
        name: "Lunettes de Vue",
        type: "vue",
        brand: "Ray-Ban",
        gender: "homme",
        image: lh1,
        description: "Lunettes de vue élégantes et modernes pour un style professionnel.",
    },
    {
        id: 2,
        name: "Lunettes de Vue",
        type: "vue",
        brand: "Gucci",
        gender: "homme",
        image: lh2,
        description: "Lunettes de vue élégantes et modernes pour un style professionnel.",
    },
    {
        id: 3,
        name: "Lunettes de Vue",
        type: "vue",
        brand: "Tom Ford",
        gender: "homme",
        image: lh3,
        description: "Lunettes de vue élégantes et modernes pour un style professionnel.",
    },
    {
        id: 4,
        name: "Lunettes de Vue",
        type: "vue",
        brand: "Oakley",
        gender: "homme",
        image: lh4,
        description: "Lunettes de vue élégantes et modernes pour un style professionnel.",
    },
    {
        id: 5,
        name: "Lunettes de Vue",
        type: "vue",
        brand: "Oakley",
        gender: "homme",
        image: lh5,
        description: "Lunettes de vue élégantes et modernes pour un style professionnel.",
    },
    {
        id: 6,
        name: "Lunettes de Vue",
        type: "vue",
        brand: "Tom Ford",
        gender: "femme",
        image: lf1,
        description: "Lunettes de vue élégantes et modernes pour un style professionnel.",
    },
    {
        id: 7,
        name: "Lunettes de Vue",
        type: "vue",
        brand: "Gucci",
        gender: "femme",
        image: lf2,
        description: "Lunettes de vue élégantes et modernes pour un style professionnel.",
    },
    {
        id: 8,
        name: "Lunettes de Vue",
        type: "vue",
        brand: "Oakley",
        gender: "femme",
        image: lf3,
        description: "Lunettes de vue élégantes et modernes pour un style professionnel.",
    },
    {
        id: 9,
        name: "Lunettes de Vue",
        type: "vue",
        brand: "Ray-Ban",
        gender: "femme",
        image: lf4,
        description: "Lunettes de vue élégantes et modernes pour un style professionnel.",
    },
    {
        id: 10,
        name: "Lunettes de Vue",
        type: "vue",
        brand: "Chloé",
        gender: "femme",
        image: lf5,
        description: "Lunettes de vue élégantes et modernes pour un style professionnel.",
    },
    {
        id: 11,
        name: "Lunettes de Vue",
        type: "vue",
        brand: "Oakley",
        gender: "enfant",
        image: le1,
        description: "Lunettes de vue élégantes et modernes pour un style professionnel.",
    },
    {
        id: 12,
        name: "Lunettes de Vue",
        type: "vue",
        brand: "Chloé",
        gender: "enfant",
        image: le2,
        description: "Lunettes de vue élégantes et modernes pour un style professionnel.",
    },
    {
        id: 13,
        name: "Lunettes de Vue",
        type: "vue",
        brand: "Tom Ford",
        gender: "enfant",
        image: le3,
        description: "Lunettes de vue élégantes et modernes pour un style professionnel.",
    },
    {
        id: 14,
        name: "Lunettes de Vue",
        type: "vue",
        brand: "Ray-Ban",
        gender: "enfant",
        image: le4,
        description: "Lunettes de vue élégantes et modernes pour un style professionnel.",
    },
    {
        id: 15,
        name: "Lunettes de Vue",
        type: "vue",
        brand: "Ray-Ban",
        gender: "enfant",
        image: le5,
        description: "Lunettes de vue élégantes et modernes pour un style professionnel.",
    },
    {
        id: 16,
        name: "Lunettes de Vue",
        type: "vue",
        brand: "Tom Ford",
        gender: "enfant",
        image: le6,
        description: "Lunettes de vue élégantes et modernes pour un style professionnel.",
    },
    {
        id: 17,
        name: "Lunettes de Soleil",
        type: "soleil",
        brand: "Gucci",
        gender: "homme",
        image: sm1,
        description: "Lunettes de vue élégantes et modernes pour un style professionnel.",
    },
    {
        id: 18,
        name: "Lunettes de Soleil",
        type: "soleil",
        brand: "Ray-Ban",
        gender: "homme",
        image: sm2,
        description: "Lunettes de vue élégantes et modernes pour un style professionnel.",
    },
    {
        id: 19,
        name: "Lunettes de Soleil",
        type: "soleil",
        brand: "Oakley",
        gender: "homme",
        image: sm3,
        description: "Lunettes de vue élégantes et modernes pour un style professionnel.",
    },
    {
        id: 20,
        name: "Lunettes de Soleil",
        type: "soleil",
        brand: "Ray-Ban",
        gender: "femme",
        image: sf1,
        description: "Lunettes de vue élégantes et modernes pour un style professionnel.",
    },
    {
        id: 21,
        name: "Lunettes de Soleil",
        type: "soleil",
        brand: "Chloé",
        gender: "femme",
        image: sf2,
        description: "Lunettes de vue élégantes et modernes pour un style professionnel.",
    },
    {
        id: 22,
        name: "Lunettes de Soleil",
        type: "soleil",
        brand: "Oakley",
        gender: "femme",
        image: sf3,
        description: "Lunettes de vue élégantes et modernes pour un style professionnel.",
    },
];