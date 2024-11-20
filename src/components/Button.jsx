import { useState } from 'react'

const Button = ({ label, defaultClass }) => {
    const [isHovered, setIsHovered] = useState(false);

     // Déterminer la classe de survol (inverse de la classe par défaut)
  const hoverClass = defaultClass === 'btn-secondary' ? 'btn-primary' : 'btn-secondary';
    return (
        <>
            <button
                className={`btn ${isHovered ? hoverClass : defaultClass}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {label}
            </button>
        </>
    )
}

export default Button