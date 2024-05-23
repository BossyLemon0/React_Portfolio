import React from "react";
// import '../styles/App.css';

export default function Skills(props){
    return (
    <div className = 'slides' name='skills'>
        <div className="second">
            <div className="texty">
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
            </div>
        </div>
    </div>
    );
}