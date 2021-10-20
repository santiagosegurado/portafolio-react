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
                        <div className="skill-per" per="80%" style={{maxWidth: 270}} ></div>
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-name">CSS</div>
                    <div className="skill-bar">
                        <div className="skill-per" per="70%" style={{maxWidth: 230}}></div>
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-name">Sass</div>
                    <div className="skill-bar">
                        <div className="skill-per" per="60%" style={{maxWidth: 200}} ></div>
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-name">JavaScript</div>
                    <div className="skill-bar">
                        <div className="skill-per" per="70%" style={{maxWidth: 230}} ></div>
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-name">React</div>
                    <div className="skill-bar">
                        <div className="skill-per" per="50%" style={{maxWidth: 170}} ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
