import React from 'react';
import './skills.scss'

export const Skills = () => {
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

                    <div className="skill">
                        <div className="skill-name">CSS</div>
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

                    <div className="skill">
                        <div className="skill-name">React</div>
                        <div className="skill-bar">
                            <div id="react" className="skill-per" per="50%"  ></div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
