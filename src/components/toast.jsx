import React from 'react';

function Toast({ message, onClose }) {
    return (
        <div className="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className="toast-body">
                    {message}
                </div>
                <button type="button" className="btn-close me-2 m-auto" onClick={onClose} aria-label="Close"></button>
            </div>
        </div>
    );
}

export default Toast;
