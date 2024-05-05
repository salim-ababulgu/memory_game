// Navbar.jsx
import React from 'react';
import logo from '../assets/card/logo.svg'; // Importez le logo
console.log 

const Navbar = () => {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg border-bottom rounded mb-5">
                <img className="logo" src="/src/assets/card/logo.png" alt="logo" />
                <a className="navbar-brand text-light mx-2" href="#">Memory Game</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end mx-2" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item">
                            <a className="nav-link text-light active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Features</a>
                        </li>*/}
                        <li className="nav-item mx-3">
                            <button type="button " className="btn btn-outline-light " data-bs-toggle="modal" data-bs-target="#tableauxDeScore">
                                Tableaux des scores
                                <i className="bi bi-arrow-up-right m-1"></i>
                            </button>
                        </li> 
                        {/* Tableaux de score */}
                        <button type="button " className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#parametre">Paramètre
                            <i className="bi bi-arrow-up-right m-1"></i>
                        </button>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
