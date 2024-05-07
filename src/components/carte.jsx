import React, { useState, useEffect } from 'react';

const styles = {
    carte: {
        width: '75px',
        height: 'auto',
        transition: 'transform 0.5s ease', // Ajout de transition pour un effet de retournement fluide
        cursor: 'pointer',
    },
    flipped: {
        transform: 'rotateY(-180deg)', // Rotation de la carte lorsqu'elle est retournée
    },
    unflipped: {
        transform: 'rotateY(180deg)', // Rotation de la carte pour revenir à son état initial après vérification de compatibilité
    },
};

function Carte(props) {
    const [flipped, setFlipped] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const image = new Image();
        image.src = props.imageSrc;
        image.onload = () => {
            setLoading(false);
        };
    }, [props.imageSrc]);

    const handleClick = () => {
        setFlipped(!flipped); // Inversion de l'état de retournement
        // Si la vérification de compatibilité est effectuée, retourner la carte à son état initial en -180 degrés
        if (props.compatibilityCheck) {
            setTimeout(() => {
                setFlipped(false);
            }, 1000); // Ajustez selon vos préférences
        }
        props.onClick(props.id); // Appel de la fonction onClick parente
    };

    return (
        <div style={{ position: 'relative' }}>
            {loading && (
                <div className="placeholder-glow" style={{ ...styles.carte }}></div>
            )}
            <img
                src={props.imageSrc}
                alt={props.altText}
                style={{
                    ...styles.carte,
                    ...(flipped ? styles.flipped : styles.unflipped),
                    visibility: loading ? 'hidden' : 'visible',
                }} // Appliquer la classe flipped ou unflipped selon l'état de la carte
                onClick={handleClick}
            />
        </div>
    );
}

export default Carte;
