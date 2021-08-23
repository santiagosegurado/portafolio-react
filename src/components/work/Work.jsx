import React, { useState } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { destacadosPortafolio } from '../../data'
import './work.scss';

export const Work = () => {
    
    const [slider, setSilder] = useState(0)
    
    const handleSliderLeft = ()=>{
        setSilder( slider > 0 ? slider -1 : 1  )  
                                 
    }

    const handleSliderRight = ()=>{
       
        setSilder( slider < destacadosPortafolio.length-1 ? slider +1 : 0  ); 
    }

    return (
        <div className="work" id="work">
            <div className="slider" style={{ transform:`translateX(-${ slider * 100}vw)`}}>
            {
               destacadosPortafolio.map(d=>{
                   return(<div className="container" key={ d.id }>
                                <div className="item">
                                    <div className="left">
                                        <div className="leftContainer">
                                            <div className="imgContainer">
                                                <img src="./assets/programacion.png" alt="React" />
                                            </div>
                                            <h2>{ d.titulo }</h2>
                                            <p>{ d.descripcion }</p>
                                            <span>Proyectos</span>
                                        </div>
                                    </div>

                                    <div className="right">
                                        <img src={d.img} alt={ d.titulo } />
                                    </div>
                                </div>
                            </div>)
               }) 
            }            
            </div>
            <ArrowBackIosIcon className="arrow left" onClick={ handleSliderLeft }  />
            <ArrowForwardIosIcon className="arrow right" onClick={ handleSliderRight }/>
        </div>
    )
}
