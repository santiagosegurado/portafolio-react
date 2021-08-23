import React, { useState } from 'react';
import { useEffect } from 'react';
import { PortafolioMenu } from '../portafolioMenu/PortafolioMenu';
import { destacadosPortafolio, 
        javaScriptPortafolio, 
        reactPortafolio} from '../../data';

import './portafolio.scss'



export const Portafolio = () => {
    
    const [seleccionado, setSelecionado] = useState("destacado");

    const [data, setData] = useState([]);


    useEffect(() => {
        
        switch (seleccionado) {
            case "destacado":
                
                setData(destacadosPortafolio)
                break;
            
            case "javaScript":
                
                setData(javaScriptPortafolio)
                break;
            
        
            case "react":
            
                setData(reactPortafolio)
                break;
            
            default: 
                setData(destacadosPortafolio)
                break;
        }
        
    }, [seleccionado])


    const list = [
        {
            id: "destacado",
            titulo: "Destacado"
        },
        {
            id: "javaScript",
            titulo: "JavaScript"
        },
        {
            id: "htmlYCss",
            titulo: "Html y Css"
        },
        {
            id: "react",
            titulo: "React"
        },
    ]
    
    return (
        <div className="portafolio" id="portafolio">
            <h1>Portafolio</h1>
            <ul>
                
                {
                    list.map(lista =>{
                        
                        return (<PortafolioMenu 
                                    key={ lista.id }
                                    activo={ seleccionado === lista.id } 
                                    setSelecionado={ setSelecionado} 
                                    titulo={ lista.titulo }
                                    id ={lista.id} />)
                    })
                }
            </ul>

            <div className="container">
                {
                    data.map( d =>{
                        return( <div key={ d.id } className="item">
                                    <img src={ d.img } alt={ d.titulo }/>
                                    <a href={d.url} target="_blank">{d.titulo}</a>
                                </div>)

                    })
                }
                
                
            </div>

        </div>
    )
}