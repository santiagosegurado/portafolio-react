import React from 'react';
import './popup.scss';

export const PopupReact = ({ openPopupReact, handlePopupReact }) => {
    return (openPopupReact) 
        &&
        (<div>
            <div className="popup" onClick={ handlePopupReact }>
                <div className="popup-inner">
                    <div className="btn-close">
                        <button onClick={ handlePopupReact } >Cerrar</button>
                    </div>
                    <ul>
                        <li>Hooks</li>
                        <li>Custom Hooks</li>
                        <li>Funtional Components</li>
                        <li>Redux</li>
                    </ul>
                </div>
            </div>
        </div>)
}
