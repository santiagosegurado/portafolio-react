import React from 'react';
import './topbar.scss'
import { Person, Mail } from '@material-ui/icons';



export const Topbar = ({ menuOpen, setMenuOpne }) => {


    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">SantiagoSegurado </a>
                    <div className="itemConteiner">
                        <Person className="icon"/>
                        <span>1527201927</span>
                    </div>
                    <div className="itemConteiner">
                        <Mail className="icon"/>
                        <span>santisegurado1@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={ ()=>{ setMenuOpne(!menuOpen)  } }>
                        <span className="line1" ></span>
                        <span className="line2" ></span>
                        <span className="line3" ></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
