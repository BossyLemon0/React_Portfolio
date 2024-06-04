import React from "react";
// import '../styles/App.css';
import '../styles/Projects.css';
import day_plannerAvif from '../images/day_planner.avif'
import statTrackerAvif from '../images/latest_project_cropped.avif'
import weatherBoadAvif from '../images/WeatherBoard_projectA.avif'
import passwordGenAvif from '../images/password_gen.avif'
import teamGenAvif from '../images/My_team.avif'
import noteTakerAvif from '../images/Note_taker_projectA.avif'
import Boxes from "./Boxes";


export default function Projects(props){
    function statTrackerLink(){
        window.open("https://dnd-dm-character-tracker.herokuapp.com/", '_blank');
    }
    function dashboardLink(){
        window.open("https://bossylemon0.github.io/Weatherboard/", '_blank');
    }
    function noteTakerLink(){
        window.open("https://stormy-basin-51525.herokuapp.com/", '_blank');
    }
    function passwordGenLink(){
        window.open("https://bossylemon0.github.io/Password-Gen/", '_blank');
    }
    function teamGenLink(){
        window.open("https://github.com/BossyLemon0/team_generator", '_blank');
    }
    function dayplannerLink(){
        window.open("https://bossylemon0.github.io/Work_Day_Schedule/", '_blank');
    }

    return (
    <div className = 'slides project' name='projects'>
        <div className="titles titleProject">
            <div>Projects</div>
        </div>
        <Boxes props={{statTrackerLink, dashboardLink, noteTakerLink, passwordGenLink, teamGenLink, dayplannerLink}}/>
    </div>
    );
}