import React, { useEffect } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from 'ityped';

import './intro.scss'
import { useRef } from 'react';

export const Intro = () => {

    
    const ref = useRef()

    useEffect(() => {
        
        init(ref.current , { showCursor: false, strings: ['Desarrollador FrontEnd'] })
    }, [])
    

    return (
        <div className="intro" id="intro">
            {/* <div className="left">
                <div className="imgConteiner">
                    <img src="/public/assets/fotoPortafolio.jpeg" alt="Santiago Segurado" />
                </div>
            </div> */}
            <div className="right">
                <div className="wrapper">
                    <h2>Hola! Soy </h2>
                    <h1>Santiago Segurado</h1>
                    <h3 ref={ ref }></h3>
                    <a href="#portafolio" >
                        <ExpandMoreIcon className="downArrow"/>
                    </a>
                </div>
            </div>
        </div>
    )
}