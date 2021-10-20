import React from 'react';

import './menu.scss';

export const Menu = ( { menuOpen, setMenuOpne } ) => {
    
    const abrirMenu = ()=>{
        setMenuOpne(!menuOpen)
    }
    
    return (
        <div className={"menu " + ( menuOpen && "active" )} >
            <ul>
                <li onClick={ abrirMenu }>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={ abrirMenu } >
                    <a href="#portafolio">Portfolio</a>
                </li>
                <li onClick={ abrirMenu } >
                    <a href="#skills">Skills</a>
                </li>
                <li onClick={ abrirMenu } >
                    <a href="#contact">Contacto</a>
                </li>
            </ul>
        </div>
    )
}
