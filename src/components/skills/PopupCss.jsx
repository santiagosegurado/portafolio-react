import React from 'react';
import './popup.scss';

export const PopupCss = ({ openPopupCss, handlePopupCss }) => {
    return (openPopupCss) 
        &&
        (<div>
            <div 
                className="popup"
                onClick={handlePopupCss}
            >
                <div className="popup-inner">
                    <div className="btn-close">
                        <button onClick={ handlePopupCss } >Cerrar</button>
                    </div>
                    <ul>
                        <li></li>
                        <li>Custom Hooks</li>
                        <li>Funtional Components</li>
                        <li>Redux</li>
                    </ul>
                </div>
            </div>
        </div>)
}
