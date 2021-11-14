import React, { useState } from 'react';
import './skills.scss';
import { PopupReact } from './PopupReact'
import { PopupCss } from './PopupCss';

export const Skills = () => {

    const [openPopupReact, setOpenPopupReact] = useState(false);
    const [openPopupCss, setOpenPopupCss] = useState(false)

    const handlePopupReact = () => {
        setOpenPopupReact(!openPopupReact);
    }

    const handlePopupCss = () => {
        setOpenPopupCss(!openPopupCss);
    }

    return (
        <div id="skills">

            <h2>Skills</h2>
            <div className="skills">
                    <div className="skill">
                        <div className="skill-name">HTML</div>
                        <div className="skill-bar">
                            <div id="html" className="skill-per" per="80%" ></div>
                        </div>
                    </div>

                    <div 
                        className="skill"
                        onClick={ handlePopupCss }
                    >
                        <div className="skill-name">CSS <span> Ver Mas....</span></div>
                        <div className="skill-bar">
                            <div id="css" className="skill-per" per="70%" ></div>
                        </div>
                    </div>

                    <div className="skill">
                        <div className="skill-name">Sass</div>
                        <div className="skill-bar">
                            <div id="sass" className="skill-per" per="60%" ></div>
                        </div>
                    </div>

                    <div className="skill">
                        <div className="skill-name">JavaScript</div>
                        <div className="skill-bar">
                            <div id="js" className="skill-per" per="70%"  ></div>
                        </div>
                    </div>

                    <div 
                        className="skill"
                        onClick={ handlePopupReact }
                    >
                        <div className="skill-name">React <span> Ver Mas....</span></div>
                        <div className="skill-bar">
                            <div id="react" className="skill-per" per="50%"  ></div>
                        </div>
                    </div>
                    <PopupReact 
                        openPopupReact={ openPopupReact } 
                        handlePopupReact={ handlePopupReact }
                    />
                    <PopupCss
                        openPopupCss={ openPopupCss } 
                        handlePopupCss={ handlePopupCss }
                    />
            </div>
        </div>
    )
}
