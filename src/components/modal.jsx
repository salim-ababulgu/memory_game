// Importez React depuis la bibliothèque react
import React, { useState } from 'react';

const Modal = () => {
    return (
        <div>
            {/* Modal 1 - Tableaux des scores */}
            <div className="modal fade text-dark" id="modal1" tabIndex="-1" aria-labelledby="modal1Label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark text-light">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal1Label">Modal 1</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Il n'y a aucune score pour l'instant
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal 2 - Play game */}
            <div className="modal fade text-dark" id="modal2" tabIndex="-1" aria-labelledby="modal2Label" aria-hidden="true">
                <div className="modal-dialog">
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

            {/* Modal3 - Parametre */}
            <div className="modal fade" id="parametre" tabIndex="-1" aria-labelledby="parametreLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark text-light">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal3Label">Paramétre</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Contenu du Modal 3
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal4 - debutDeJeux */}
            <div className="modal fade" id="parametre" tabIndex="-1" aria-labelledby="parametreLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark text-light">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal3Label">Paramétre</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Contenu du Modal 3
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal5 - finDeJeux */}
            <div className="modal fade" id="parametre" tabIndex="-1" aria-labelledby="parametreLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark text-light">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal3Label">Paramétre</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Contenu du Modal 3
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal6 - supressionSauvegarde */}
            <div className="modal fade" id="parametre" tabIndex="-1" aria-labelledby="parametreLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark text-light">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal3Label">Paramétre</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Contenu du Modal 3
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Modal;
