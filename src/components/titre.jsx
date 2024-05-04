// Importez React depuis la bibliothèque react
import React, { useState } from 'react';

// Définissez mon composant de bouton
function Bouton(props) {
    return (
        <button>{props.texte}</button> // Utilisez props.texte pour afficher le texte du bouton
    );
}

// Exportation du composant Bouton pour qu'il soit utilisable dans d'autres pages
export default Bouton; // Utilisez Bouton avec une majuscule pour correspondre au nom de la fonction

const  [ score, setScore ] =  useState(0)