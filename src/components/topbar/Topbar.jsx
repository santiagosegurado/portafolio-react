import React from 'react';
import './topbar.scss'
import { Mail } from '@material-ui/icons';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FileDownloadIcon from '@mui/icons-material/FileDownload';



export const Topbar = ({ menuOpen, setMenuOpne }) => {


    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">SantiagoSegurado </a>
                    <a className='itemLink' href="https://wa.me/+5491127201927" target="_blank">
                        <div className="itemConteiner">
                            <LocalPhoneIcon className="icon"/>
                            <span>1527201927</span>
                        </div>
                    </a>
                    <a className='itemLink' href="mailto:santisegurado1@gmail.com">
                        <div className="itemConteiner">
                            <Mail className="icon"/>
                            <span>santisegurado1@gmail.com</span>
                        </div>
                    </a>
                    <a className='itemLink' href="./SantiagoSeguradoCV.pdf" download="SantiagoSeguradoCV.pdf">
                        <div className="itemConteiner">
                            <FileDownloadIcon className="icon"/>
                            <span>Curriculum Vitae</span>
                        </div>
                    </a>
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
