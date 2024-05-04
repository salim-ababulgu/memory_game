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
 
    useEffect(() => {
        const generateRandomPairs = () => {
            const colors = Object.keys(cartesData);
            let randomPairs = [];
            colors.forEach(color => {
                const images = cartesData[color];
                images.forEach(image => {
                    for (let i = 0; i < image.quantity; i++) {
                        randomPairs.push({ ...image, color, id: `${color}-${image.id}-${i}`, estRetournee: false });
                    }
                });
            });
            setCartes(shuffle(randomPairs));
        };

        generateRandomPairs();
    }, []);
    

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

    useEffect(() => {
        if (cartesRetournees.length === 2) {
            const [id1, id2] = cartesRetournees;
           

            const carte1 = cartes.find(carte => carte.id === id1 && carte.estRetournee);
            const carte2 = cartes.find(carte => carte.id === id2 && carte.estRetournee);

            

            if (carte1 && carte2 && carte1.id.slice(0, -2) === carte2.id.slice(0, -2)) {
                setTimeout(() => {
                    setCartes(prevCartes => {
                        return prevCartes.map(carte => {
                            if (carte.id === id1 || carte.id === id2) {
                                return { ...carte, imageSrc: imageRight };
                            }
                            return carte;
                        });
                    });
                }, 1000);
            } else {
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

            setCartesRetournees([]);
        }
    }, [cartes, cartesRetournees]);

    return (
        <div>
            <Modal />
            <Navbar />
            <h1>Jeu du mémoire</h1>
            <div className='bg-black border mb-3 mt-5 p-3 rounded d-flex justify-content-between align-items-center'>
                <h6>Temps: <span>00:00</span></h6>
                <h6>Niveaux: <span>0</span></h6>
            </div>
            {/* Tableaux de score */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal1">Tableaux des scores
                    <i className="bi bi-arrow-up-right m-1"></i>
            </button>
            <div className="App container bg-black border rounded">
                <div className='gameRoom'>
                    {cartes.map(carte => (
                        <Carte
                            key={carte.id}
                            imageSrc={carte.estRetournee ? carte.path : imageBack}
                            altText={carte.estRetournee ? `Image ${carte.id}` : "Image de dos"}
                            onClick={() => retournerCarte(carte.id)}
                        />
                    ))}
                </div>
            </div>
            <div className='bg-black border mb-5 mt-3 p-3 rounded d-flex justify-content-between align-items-center'>
                <div>
                    <i className="bi bi-volume-up-fill"></i>
                    <i className="bi bi-volume-mute-fill"></i>
                </div>
                <div>
                    <i className="bi bi-play-fill"></i>
                    <i className="bi bi-pause-fill"></i>
                </div>
                <div><i className="bi bi-sliders2-vertical" type="button" data-bs-toggle="modal" data-bs-target="#parametre"></i></div>

                
                {/*<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal2">Ouvrir Modal 2</button> */}
            </div>
        </div>
    );
}

export default App;