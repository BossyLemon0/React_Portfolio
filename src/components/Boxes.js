import React, {useState} from "react";
import '../styles/Form.css';

export default function Boxes(props){
    console.log(props.props.links.statTrackerLink)
     let {links, images} = props.props
     const [hoveredBox, setHoveredBox] = useState(null);

     function handleMouseOver(event, row) {
        console.log(event.currentTarget.children[0].children[0])
        let img = event.currentTarget.children[0].children[0]
     }
 
     // const debounceMouseOver = debounce(handleMouseOver, 40);
     function handleMouseOut() {
         setHoveredBox(null);
     } 
    return (
        <div className = 'project_container_boxes'>
            <div className='row'>
                <div className='column_box contentFrames' onClick={links.statTrackerLink}>
                    <div className="mockFrame">
                        <img src = { images.statTrackerAvif } className='img' alt='stat tracker'></img>
                    </div>
                    <div className="description">
                        <div className='myProjectHeader'>D&D Tracker</div>
                        <div className='myProjectContent'>A more convienent way for D&D players to keep track of their stats.</div>
                    </div>
                </div>
                <div className='column_box contentFrames' onClick={links.dashboardLink}>
                    <div className="mockFrame">
                        <img src = { images.weatherBoadAvif } className='img' alt='weather board'></img>
                    </div>
                    <div className="description">
                        <div className='myProjectHeader'>Weather Dashboard</div>
                        <div className='myProjectContent'>An small application to view a couple of areas's forecast.</div>
                    </div>

                </div>
                <div className='column_box contentFrames' onClick={links.noteTakerLink}>
                <div className="mockFrame">
                <img src = { images.noteTakerAvif } className='img' alt='note taker'></img>
                </div>
                <div className="description">
                    <div className='myProjectHeader'>Note Taker</div>
                    <div className='myProjectContent'>Create and save notes on the go!</div>
                </div>
                </div>
            </div>
            <div className='row'>
                <div className='column_box contentFrames'
                 onClick={links.passwordGenLink}
                 onMouseOver={(event) => handleMouseOver(event)}>
                <div className="mockFrame">
                    <img src = { images.passwordGenAvif } 
                    className={`img ${hoveredBox === 'on' ? 'imgGlow' : ''}` }   
                    alt='password gen'/>
                </div>
                <div className="description">
                    <div className='myProjectHeader'>Password Generator</div>
                    <div className='myProjectContent'>Generate a super secret password in just a few clicks.</div>
                </div>
                </div>
                <div className='column_box contentFrames' onClick={links.teamGenLink}>
                <div className="mockFrame">
                <img src = { images.teamGenAvif } className='img' alt='team gen'></img>
                </div>
                <div className="description">
                    <div className='myProjectHeader'>Team Profile Generator</div>
                    <div className='myProjectContent'>
                        Create a team through a
                        command interface and visually see, update,
                        and delete the cards when finished setting up.
                    </div>
                </div>

                </div>
                <div className='column_box contentFrames' onClick={links.dayplannerLink}>
                    <div className="mockFrame">
                    <img src = { images.day_plannerAvif } className='img' alt='day planner'></img>
                    </div>
                    <div className="description">
                        <div className='myProjectHeader'>Day Planner</div>
                        <div className='myProjectContent'>Create a planner for the day.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}