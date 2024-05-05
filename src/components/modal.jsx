// Importez React depuis la bibliothèque react
import React, { useState } from 'react';

const Modal = () => {
    return (
        <div>
            {/* Modal 1 - Tableaux des scores */}
            <div className="modal fade text-dark" id="tableauxDeScore" tabIndex="-1" aria-labelledby="modal1Label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark text-light">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal1Label">
                                <i className="bi bi-joystick mx-2"></i>
                                Tableaux des scores
                            </h5>
                            <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                    

                        <table className='table border border-black'>
                            <thead>
                                <tr>
                                    <th className='bg-black text-light border border-dark' scope='col'>#</th>
                                    {/* <th className='bg-black text-light' scope='col'>Pseudo</th> */}
                                    <th className='bg-black text-light border border-dark' scope='col'>Score</th>
                                    <th className='bg-black text-light border border-dark' scope='col'>Temps</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className='bg-black text-light border border-dark' scope="row">1</th>
                                    {/* <td>Mark</td> */}
                                    <td className='bg-dark text-light border border-black'>Otto</td>
                                    <td className='bg-dark text-light border border-black'>10:00</td>
                                </tr>
                                <tr>
                                    <th  className='bg-black text-light border border-dark' scope="row">2</th>
                                    {/* <td>Jacob</td> */}
                                    <td  className='bg-dark text-light border border-black'>Thornton</td>
                                    <td  className='bg-dark text-light border border-black'>10:00</td>
                                </tr>
                                <tr>
                                    <th  className='bg-black text-light border border-dark' scope="row">3</th>
                                    {/* <td colSpan="2">Larry the Bird</td> */}
                                    <td  className='bg-dark text-light border border-black'>Zoro</td>
                                    <td  className='bg-dark text-light border border-black'>10:00</td>
                                </tr>
                            </tbody>
                        </table>


                        </div>
                    </div>
                </div>
            </div>

            {/* Modal2 - Parametre */}
            <div className="modal fade" id="parametre" tabIndex="-1" aria-labelledby="parametreLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark text-light">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal3Label">
                                <i className="bi bi-sliders2-vertical mx-2"></i>
                                Paramétre
                            </h5>
                            <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='d-flex p-2 border-bottom'>
                                <h6 className='mx-2'>Sauvegarde:</h6>
                                <i className="bi bi-play-fill"></i>
                                <i className="bi bi-pause-fill"></i>
                            </div>
                            <div className='d-flex p-2 border-bottom'>
                                <h6 className='mx-2'>Son:</h6>
                                <i className="bi bi-play-fill"></i>
                                <i className="bi bi-pause-fill"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal3 - Play game */}
            <div className="modal fade text-dark" id="modal3" tabIndex="-1" aria-labelledby="modal2Label" aria-hidden="true">
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

            {/* Modal4 - debutDeJeux */}
            <div className="modal fade" id="parametre2" tabIndex="-1" aria-labelledby="parametreLabel" aria-hidden="true">
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
            <div className="modal fade" id="parametre3" tabIndex="-1" aria-labelledby="parametreLabel" aria-hidden="true">
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
            <div className="modal fade" id="parametre4" tabIndex="-1" aria-labelledby="parametreLabel" aria-hidden="true">
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
