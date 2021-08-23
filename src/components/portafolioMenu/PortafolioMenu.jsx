import React from 'react';
import './portafolioMenu.scss';

export const PortafolioMenu = ({ titulo, activo, setSelecionado, id }) => {
    return (
        <li className={activo ? "portafolioMenu active" : "portafolioMenu"} 
            onClick={ () =>{ setSelecionado(id) } }>
            { titulo }
        </li>
    )
}
