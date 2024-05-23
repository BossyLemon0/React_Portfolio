import React from "react";
// import '../styles/App.css';
import '../styles/Projects.css';
import day_plannerAvif from '../images/day_planner.avif'
import statTrackerAvif from '../images/latest_project_cropped.avif'
import weatherBoadAvif from '../images/WeatherBoard_projectA.avif'
import passwordGenAvif from '../images/password_gen.avif'
import teamGenAvif from '../images/My_team.avif'
import noteTakerAvif from '../images/Note_taker_projectA.avif'


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
    <div className = 'slides' name='projects'>
        <div className = 'project_container'>
            <div className='row'>
                <div className='column' onClick={statTrackerLink}>
                    <img src = { statTrackerAvif } className='img' alt='stat tracker'></img>
                    <div className='header'>D&D Tracker</div>
                    <div className='text'>A more convienent way for D&D players to keep track of their stats.</div>
                </div>
                <div className='column' onClick={dashboardLink}>
                <img src = { weatherBoadAvif } className='img' alt='weather board'></img>
                    <div className='header'>Weather Dashboard</div>
                    <div className='text'>An small application to view a couple of areas's forecast.</div>
                </div>
                <div className='column' onClick={noteTakerLink}>
                <img src = { noteTakerAvif } className='img' alt='note taker'></img>
                    <div className='header'>Note Taker</div>
                    <div className='text'>Create and save notes on the go!</div>
                </div>
            </div>
            <div className='row'>
                <div className='column' onClick={passwordGenLink}>
                <img src = { passwordGenAvif } className='img' alt='password gen'></img>
                    <div className='header'>Password Generator</div>
                    <div className='text'>Generate a super secret password in just a few clicks.</div>
                </div>
                <div className='column' onClick={teamGenLink}>
                <img src = { teamGenAvif } className='img' alt='team gen'></img>
                    <div className='header'>Team Profile Generator</div>
                    <div className='text'>Create a team through a command interface and visually see, update,
                    and delete the cards when finished setting up.</div>
                </div>
                <div className='column' onClick={dayplannerLink}>
                    <img src = { day_plannerAvif } className='img' alt='day planner'></img>
                    <div className='header'>Day Planner</div>
                    <div className='text'>Create a planner for the day.</div>
                </div>
            </div>
        </div>
    </div>
    );
}