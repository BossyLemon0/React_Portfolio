import React from "react";
// import '../styles/App.css';

export default function About(props){
    return (
    <div className = 'slides about' name='about'>
        <div className="titles titleAbout">
            <div>What I'm About</div>
        </div>
        <div className="contentContainer">

            <div className="contentFrames skills">
            <div className="texty">
                <div className="skillsHeader">
                    <div className="underline"> 
                        Skills
                    </div>
                </div>
                <div className="skillsContentContainer">
                    <div className="skillRow">
                        <div className="skillBox">HTML</div>
                        <div className="skillBox">Javascript</div>
                        <div className="skillBox">CSS</div>
                        <div className="skillBox">NoSQL</div>
                    </div>
                    <div className="skillRow staggerLeft">
                        <div className="skillBox">Macros</div>
                        <div className="skillBox">React</div>
                        <div className="skillBox">SQL</div>
                        <div className="skillBox">C#</div>
                    </div>
                    <div className="skillRow staggerRight">
                        <div className="skillBox">Lua</div>
                        <div className="skillBox">Python</div>
                        <div className="skillBox">Docker</div>
                        <div className="skillBox">Cypress</div>
                    </div>
                    <div className="skillRow staggerLeftMore">
                        <div className="skillBox">Figma</div>
                        <div className="skillBox">Node.js</div>
                        <div className="skillBox">REST</div>
                        <div className="skillBox">Socket.io</div>
                    </div>
                    <div className="skillRow staggerRightMore">
                        <div className="skillBox">Express</div>
                        <div className="skillBox">Insomnia</div>
                        <div className="skillBox">Axios</div>
                        <div className="skillBox">GraphQl</div>
                    </div>
                    {/* <p className="skillP">HTML</p>
                    <p className="skillP">CSS</p>
                    <p className="skillP">Javascript</p>
                    <p className="skillP">SQL</p>
                    <p className="skillP">GraphQl</p>
                    <p className="skillP">React</p>
                    <p className="skillP">Express</p>
                    <p className="skillP">MongoDb</p>
                    <p className="skillP">Express Handlebars</p>
                    <p className="skillP">Luxon</p> */}
                </div>
            </div>
            </div>
            <div className="contentFrames aboutMe">
            {/* <div className="texty">
                <header className="skillsHeader"> My skills</header>
                    <p className="skillP">HTML</p>
                    <p className="skillP">CSS</p>
                    <p className="skillP">Javascript</p>
                    <p className="skillP">SQL</p>
                    <p className="skillP">GraphQl</p>
                    <p className="skillP">React</p>
                    <p className="skillP">Express</p>
                    <p className="skillP">MongoDb</p>
                    <p className="skillP">Express Handlebars</p>
                    <p className="skillP">Luxon</p>
            </div> */}
            </div>

        </div>

    </div>
    );
}