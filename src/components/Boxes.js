import React from "react";
import '../styles/Form.css';

export default function Boxes(props){
    return (
        <div className = 'project_container_boxes'>
            <div className='row'>
                <div className='column' onClick={props.statTrackerLink}>
                    {/* <img src = { statTrackerAvif } className='img' alt='stat tracker'></img> */}
                    <div className='header'>D&D Tracker</div>
                    <div className='text'>A more convienent way for D&D players to keep track of their stats.</div>
                </div>
                <div className='column' onClick={props.dashboardLink}>
                {/* <img src = { weatherBoadAvif } className='img' alt='weather board'></img> */}
                    <div className='header'>Weather Dashboard</div>
                    <div className='text'>An small application to view a couple of areas's forecast.</div>
                </div>
                <div className='column' onClick={props.noteTakerLink}>
                {/* <img src = { noteTakerAvif } className='img' alt='note taker'></img> */}
                    <div className='header'>Note Taker</div>
                    <div className='text'>Create and save notes on the go!</div>
                </div>
            </div>
            <div className='row'>
                <div className='column' onClick={props.passwordGenLink}>
                {/* <img src = { passwordGenAvif } className='img' alt='password gen'></img> */}
                    <div className='header'>Password Generator</div>
                    <div className='text'>Generate a super secret password in just a few clicks.</div>
                </div>
                <div className='column' onClick={props.teamGenLink}>
                {/* <img src = { teamGenAvif } className='img' alt='team gen'></img> */}
                    <div className='header'>Team Profile Generator</div>
                    <div className='text'>Create a team through a command interface and visually see, update,
                    and delete the cards when finished setting up.</div>
                </div>
                <div className='column' onClick={props.dayplannerLink}>
                    {/* <img src = { day_plannerAvif } className='img' alt='day planner'></img> */}
                    <div className='header'>Day Planner</div>
                    <div className='text'>Create a planner for the day.</div>
                </div>
            </div>
        </div>
    );
}