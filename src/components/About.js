import React, { useState } from 'react';
import { debounce } from 'lodash';
import CircleImage from './CircleImage';
// import '../styles/App.css';

export default function About(props){

    const [hoveredRow, setHoveredRow] = useState(null);

    function handleMouseOver(event, row) {
        // console.log(event.target.parentNode.parentNode.getBoundingClientRect())
        // console.log(event.currentTarget.parentNode.parentNode.getBoundingClientRect())
        // const rect = event.currentTarget.getBoundingClientRect();
        // console.log(rect)
        // const mouseX = event.clientX;
        // const rowMidpoint = rect.left + rect.width / 2;
        // const distanceFromMidpoint = mouseX - rowMidpoint;




        const skillsBox = event.target.parentNode.parentNode.getBoundingClientRect();
        const mouseX = event.clientX;
        const boxMidpoint = skillsBox.left + skillsBox.width / 2;

        // console.log(boxMidpoint)
        // console.log(mouseX)
        if (mouseX < boxMidpoint) {
            setHoveredRow('left');
        }
        else if(mouseX > boxMidpoint){
            setHoveredRow('right');
        }
        else {
            setHoveredRow(null)
        }
    }

    // const debounceMouseOver = debounce(handleMouseOver, 40);
    function handleMouseOut() {
        setHoveredRow(null);
    }

    return (
    <div className = 'slides about' name='about'>
        <div className="titles titleAbout">
            <div>What I'm About</div>
        </div>
        <div className="contentContainer">

            <div className="contentFrames skillsSize">
            <div className="texty">
                <div className="skillsHeader header">
                    <div className="underline"> 
                        Skills
                    </div>
                </div>
                <div className={`skillsContentContainer`}>
                    <div className={`skillRow ${hoveredRow === 'left' ? 'hover-left1' : ''} ${hoveredRow === 'right' ? 'hover-right1' : ''}`}
                    onMouseOver={(event) => handleMouseOver(event)}
                    onMouseOut={handleMouseOut}>
                        <div className="skillBox">HTML</div>
                        <div className="skillBox">Javascript</div>
                        <div className="skillBox">CSS</div>
                        <div className="skillBox">NoSQL</div>
                    </div>
                    <div className={` skillRow staggerLeft ${hoveredRow === 'left' ? 'hover-left2' : ''} ${hoveredRow === 'right' ? 'hover-right2' : ''}`}
                    onMouseOver={(event) => handleMouseOver(event)}
                    onMouseOut={handleMouseOut}>
                        <div className="skillBox">Macros</div>
                        <div className="skillBox">React</div>
                        <div className="skillBox">SQL</div>
                        <div className="skillBox">C#</div>
                    </div>
                    <div className={`skillRow staggerRight ${hoveredRow === 'left' ? 'hover-left3' : ''} ${hoveredRow === 'right' ? 'hover-right3' : ''}`}
                    onMouseOver={(event) => handleMouseOver(event)}
                    onMouseOut={handleMouseOut}>
                        <div className="skillBox">Lua</div>
                        <div className="skillBox">Python</div>
                        <div className="skillBox">Docker</div>
                        <div className="skillBox">Cypress</div>
                    </div>
                    <div className={`skillRow staggerLeftMore ${hoveredRow === 'left' ? 'hover-left4' : ''} ${hoveredRow === 'right' ? 'hover-right4' : ''}`}
                    onMouseOver={(event) => handleMouseOver(event)}
                    onMouseOut={handleMouseOut}>
                        <div className="skillBox">Figma</div>
                        <div className="skillBox">Node.js</div>
                        <div className="skillBox">REST</div>
                        <div className="skillBox">Socket.io</div>
                    </div>
                    <div className={`skillRow staggerRightMore ${hoveredRow === 'left' ? 'hover-left5' : ''} ${hoveredRow === 'right' ? 'hover-right5' : ''}`} 
                    onMouseOver={(event) => handleMouseOver(event)}
                    onMouseOut={handleMouseOut}>
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
            <div className="contentFrames aboutMeSize">
                <div className='logoSection '>
                    <div className='aboutMesectionPadding'>
                    <CircleImage frameColor="blue" imageUrl="path/to/your/image.jpg" />
                    </div>
                </div>
                <div className='myInfoSection '>
                    <div className='myInfoHeader header aboutMesectionPadding'>
                        About Me
                    </div>
                    <div className='myInfoContent content aboutMesectionPadding'>
                    I’m a goal-oriented Full-Stack developer from Houston,Texas who likes to design new websites,
                    learn new technologies and find new ways to solve problems. I love to help others
                    bring their ideas life and create something truly amazing. I've worked on company dashboards, 
                    promotional websites and more. If you have an awesome idea for a website or app, send me a message
                    below.
                    </div>
                </div>
            </div>

        </div>

    </div>
    );
}