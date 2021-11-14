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
                        <li>Responsive Web Desing</li>
                        <li>Flexbox</li>
                        <li>Css Grid</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
            </div>
        </div>)
}
