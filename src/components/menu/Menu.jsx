import React from 'react';

import './menu.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Mail } from '@material-ui/icons';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import cv from '../../SantiagoSeguradoCV.pdf';


export const Menu = ( { menuOpen, setMenuOpne } ) => {
    
    const abrirMenu = ()=>{
        setMenuOpne(!menuOpen)
    }
    
    return (
        <div className={"menu " + ( menuOpen && "active" )} >
            {
                window.innerWidth <= 758 && 
                <div className='menuIconWrap'>
                    <a href="https://github.com/santiagosegurado">
                        <GitHubIcon className='menuIcon'/>
                    </a>
                    <a href="mailto:santisegurado1@gmail.com">
                        <Mail className='menuIcon'/>
                    </a>
                    <a href="https://wa.me/+5491127201927">
                        <LocalPhoneIcon className='menuIcon'/>
                    </a>
                    <a href={cv}>
                        <FileDownloadIcon className='menuIcon'/>
                    </a>
                </div>
            }
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
                    <a href="#github">GitHub</a>
                </li>
                <li onClick={ abrirMenu } >
                    <a href="#contact">Contacto</a>
                </li>
            </ul>
        </div>
    )
}
