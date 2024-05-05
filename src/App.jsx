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
            <Navbar />
            <Modal />
            <div className='bg-black border mb-3 mt-5 p-3 rounded d-flex justify-content-between align-items-center'>
                <h6>Temps: <span>00:00</span></h6>
                <div>
                    <h6>Point: <span>0</span><i className="bi bi-info mx-3 border rounded-circle px-1"></i></h6>
                </div>
            </div>
            
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
                    <h6>Niveaux: <span>0</span></h6>
                </div>    
                <div className='d-flex gap-3'>
                    <div className="dropdown">
                        <button className="btn btn-black text-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Thémes
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Emojis</a></li>
                            <li><a className="dropdown-item" href="#">Number</a></li>
                            <li><a className="dropdown-item" href="#">Coding</a></li>
                        </ul>
                    </div>
                    <button type="button" className="btn btn-black text-light border">Mélanger</button>
                </div>
            </div>
        </div>
    );
}

export default App;