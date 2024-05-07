import React, { useState, useEffect } from 'react';


// Appel des composants
import Bouton from './components/bouton'
import Carte from './components/carte'
import Modal from './components/modal'
import Navbar from './components/navbar'; // Importez le composant Navbar

// Bootstrap pour mieux gérer le style
import '/src/assets/bootstrap.min.css'
import '/src/assets/bootstrap.bundle.min.js';
import '/src/assets/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importe le fichier CSS des icônes Bootstrap

// Dos des cartes dee base
import imageBack from './assets/card/back-card.svg'

// Affichage des paires de cartes trouvées
import imageRight from './assets/card/right-card.svg'

// Importez les données des cartes depuis le fichier JSON
import cartesData from './cartes.json'

import './App.css'


function App() {
    const [cartes, setCartes] = useState([]);
    const [cartesRetournees, setCartesRetournees] = useState([]);
    const [niveauActuel, setNiveauActuel] = useState(1); // Utilisez "niveauActuel" au lieu de "niveau"
    const [temps, setTemps] = useState(0); // État local pour suivre le temps écoulé
    const [chrono, setChrono] = useState(null); // État local pour stocker l'identifiant de l'intervalle du chronomètre
    const [totalCartes, setTotalCartes] = useState(0); // État local pour suivre le nombre total de cartes pour l'arret du temps
    const [pairesDeCartesTrouvees, setPairesDeCartesTrouvees] = useState(0); // État pour stocker le nombre de paires trouvées
    const [gameOverModalOpen, setGameOverModalOpen] = useState(true); // Nouvel état pour contrôler l'ouverture de la modal de fin de jeu

    useEffect(() => {
        // Code pour générer des paires aléatoires de cartes
        const generateRandomPairs = () => {
            let randomPairs = [];
            let total = 0; // Variable pour compter le nombre total de cartes
            const colors = Object.keys(cartesData);
            colors.forEach(color => {
                const colorData = cartesData[color];
                if (colorData.levels.includes(niveauActuel)) {
                    colorData.cards.forEach(card => {
                        for (let i = 0; i < card.quantity; i++) {
                            randomPairs.push({ ...card, color, id: `${color}-${card.id}-${i}`, estRetournee: false });
                            total++;
                        }
                    });
                }
            });
            setCartes(shuffle(randomPairs));
            setTotalCartes(total); // Met à jour le nombre total de cartes
        };
    
        generateRandomPairs();
        
    }, [niveauActuel]);

    
    // Fonctions shuffle, retournerCarte et effets pour gérer les paires retournées
    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    };

    const retournerCarte = (id) => {
        if (cartesRetournees.length === 2) {
            return;
        }

        setCartes(prevCartes => {
            return prevCartes.map(carte => {
                if (carte.id === id) {
                    return { ...carte, estRetournee: true };
                }
                return carte;
            });
        });

        setCartesRetournees(prevCartesRetournees => [...prevCartesRetournees, id]);
    };
    

    // Fonctions pour gérer les paires retournées et vérifier la fin du jeu
useEffect(() => {
    if (cartesRetournees.length === 2) {
        const [id1, id2] = cartesRetournees;
        const carte1 = cartes.find(carte => carte.id === id1 && carte.estRetournee);
        const carte2 = cartes.find(carte => carte.id === id2 && carte.estRetournee);

        if (carte1 && carte2 && carte1.id.slice(0, -2) === carte2.id.slice(0, -2)) {
            // Si les deux cartes sont identiques, incrémentez le nombre de paires trouvées
            setPairesDeCartesTrouvees(prevPaires => prevPaires + 1);
        } else {
            // Sinon, retournez les cartes après un délai
            setTimeout(() => {
                setCartes(prevCartes => {
                    return prevCartes.map(carte => {
                        if (carte.id === id1 || carte.id === id2) {
                            return { ...carte, estRetournee: false };
                        }
                        return carte;
                    });
                });
            }, 1000);
        }

        setCartesRetournees([]); // Réinitialiser les cartes retournées
    }

    // Vérification de la fin du jeu
    if (pairesDeCartesTrouvees === totalCartes / 2) {
        clearInterval(chrono); // Arrête le chronomètre
        console.log("open modal");
        setGameOverModalOpen(true); // Ouvre la modal de fin de jeu
    }
}, [cartes, cartesRetournees, chrono, totalCartes, pairesDeCartesTrouvees]);



    // Fonction pour passer au niveau suivant
    const passerAuNiveauSuivant = () => {
        setNiveauActuel(prevNiveau => prevNiveau + 1);
    };


    //Effet pour réinitialiser le temps écoulé à chaque changement de niveau
    useEffect(() => {
        setTemps(0); // Réinitialiser le temps écoulé à 0
    }, [niveauActuel]);


    // Effet pour démarrer le chronomètre au premier clic sur une carte
    useEffect(() => {
        if (chrono === null && cartesRetournees.length === 1) {
            setChrono(setInterval(() => {
                setTemps(prevTemps => prevTemps + 1);
            }, 1000));
        }
    }, [cartesRetournees, chrono]);

    // Formatage du temps écoulé en minutes et secondes
    const formatTemps = (temps) => {
        const minutes = Math.floor(temps / 60).toString().padStart(2, '0');
        const secondes = (temps % 60).toString().padStart(2, '0');
        return `${minutes}:${secondes}`;
    };


    return (
        <div>
            <Navbar />
            <Modal isOpen={gameOverModalOpen} onClose={() => setGameOverModalOpen(false)}>
                <div className="modal-content">
                    <h2>Félicitations ! Vous avez terminé le jeu !</h2>
                    {/* Contenu supplémentaire de la modal de fin de jeu */}
                </div>
            </Modal>
            <div className='bg-black border d-flex mb-3 mt-5 py-1 px-3 rounded d-flex justify-content-between align-items-center'>
            <div className='m-0'>Temps: <span>{formatTemps(temps)}</span></div>
                <div>
                    <div className='d-flex align-items-center justify-content-center m-0'>
                        Point: <span className='px-1'> 0</span>
                        <button className='mx-3 border rounded-circle p-0' data-bs-toggle='tooltip' data-bs-placement='top' data-bs-title='Tooltip on top'>
                            <i className="bi bi-info p-1"></i>
                            {/* Tooltip on top */}
                        </button>
                    </div>
                </div>
            </div>
            
            <div className='App container bg-black border rounded'>
                <div className='gameRoom'>
                    {cartes.map(carte => (
                        <Carte
                            key={carte.id}
                            imageSrc={carte.estRetournee ? carte.path : imageBack}
                            altText={carte.estRetournee ? `Image ${carte.id}` : "Image de dos"}
                            onClick={() => retournerCarte(carte.id)}
                        />
                    ))}

                    {/* Modal de fin de jeu */}
            <Modal isOpen={gameOverModalOpen} onClose={() => setGameOverModalOpen(false)}>
                <div className="modal-content">
                    <h2>Félicitations ! Vous avez terminé le jeu !</h2>
                    {/* Contenu supplémentaire de la modal de fin de jeu */}
                </div>
            </Modal>

                </div>
            </div>

            <div className='bg-black border d-flex mb-3 mt-3 py-0 px-3 rounded d-flex justify-content-between align-items-center'>
                <div>
                    <div className='m-0' id='niveaux'>Niveaux: <span>{niveauActuel}</span></div>
                </div>    
                <div className='d-flex gap-3'>
                    <div className="dropdown">
                        <button className="btn btn-black text-light border-none dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Thémes
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Emojis</a></li>
                            <li><a className="dropdown-item" href="#">Number</a></li>
                            <li><a className="dropdown-item" href="#">Coding</a></li>
                        </ul>
                    </div>
                    <button type="button" className="btn btn-black text-light border-none">Mélanger</button>
                </div>
            </div>

            <div className='d-flex align-items-center justify-content-between'>
                <button type="button" class="btn btn-secondary" onClick={passerAuNiveauSuivant}>Niveaux suivant</button>
                <button type="button" class="btn btn-secondary">Recommencer</button>
            </div>



            {/* Modal3 - Play game */}
            <div className="modal fade text-dark" id="gameRoomModal" tabIndex="-1" aria-labelledby="modal2Label" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal2Label">Modal 2</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Contenu du Modal 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;