import React, {useState} from "react";
import '../styles/Form.css';
import { forEach } from "lodash";

export default function Boxes(props){
    // console.log(props.props.links.statTrackerLink)
     let {links, images} = props.props
     const [hoveredBox, setHoveredBox] = useState(null);


    // To fix my problem I can create multiple hover css for each box or detect change the turnary to detect image name

     function handleMouseEnter(event, row) {
        let targetId = event.currentTarget.id
        console.log(event.currentTarget.id)
        if (targetId){
            setHoveredBox(targetId)
        }
        else{
            console.log('not found')
        }
     }
 
     function handleMouseLeaves() {
         setHoveredBox(null);
     } 
    return (
        <div className = 'project_container_boxes'>
            <div className='row'>
                <div className='column_box contentFrames' 
                id="imgGlow1"
                onClick={links.statTrackerLink}
                onMouseOver={(event) => handleMouseEnter(event)}
                onMouseOut={handleMouseLeaves}>
                    <div className="mockFrame">
                        <img src = { images.statTrackerAvif } 
                        className={`img ${hoveredBox === 'imgGlow1' ? 'on' : ''}` } 
                        alt='stat tracker'/>
                    </div>
                    <div className="description">
                        <div className='myProjectHeader'>D&D Tracker</div>
                        <div className='myProjectContent'>A more convienent way for D&D players to keep track of their stats.</div>
                    </div>
                </div>
                <div className='column_box contentFrames' 
                id="imgGlow2"
                onClick={links.dashboardLink}
                onMouseOver={(event) => handleMouseEnter(event)}
                onMouseOut={handleMouseLeaves}>
                    <div className="mockFrame">
                        <img src = { images.weatherBoadAvif } 
                        className={`img ${hoveredBox === 'imgGlow2' ? 'on' : ''}` } 
                        alt='weather board'></img>
                    </div>
                    <div className="description">
                        <div className='myProjectHeader'>Weather Dashboard</div>
                        <div className='myProjectContent'>An small application to view a couple of areas's forecast.</div>
                    </div>

                </div>
                <div className='column_box contentFrames'
                id = 'imgGlow3'
                onClick={links.noteTakerLink}
                onMouseOver={(event) => handleMouseEnter(event)}
                onMouseOut={handleMouseLeaves}>
                <div className="mockFrame">
                <img src = { images.noteTakerAvif } 
                className={`img ${hoveredBox === 'imgGlow3' ? 'on' : ''}` } 
                alt='note taker'/>
                </div>
                <div className="description">
                    <div className='myProjectHeader'>Note Taker</div>
                    <div className='myProjectContent'>Create and save notes on the go!</div>
                </div>
                </div>
            </div>
            <div className='row'>
                <div className='column_box contentFrames'
                 id="imgGlow4"
                 onClick={links.passwordGenLink}
                 onMouseOver={(event) => handleMouseEnter(event)}
                 onMouseOut={handleMouseLeaves}>
                <div className="mockFrame">
                    <img src = { images.passwordGenAvif } 
                    className={`img ${hoveredBox === 'imgGlow4' ? 'on' : ''}` }   
                    alt='password gen'/>
                </div>
                <div className="description">
                    <div className='myProjectHeader'>Password Generator</div>
                    <div className='myProjectContent'>Generate a super secret password in just a few clicks.</div>
                </div>
                </div>
                <div className='column_box contentFrames'
                id="imgGlow5"
                onClick={links.teamGenLink}
                onMouseOver={(event) => handleMouseEnter(event)}
                onMouseOut={handleMouseLeaves}>
                <div className="mockFrame">
                <img src = { images.teamGenAvif }
                className={`img ${hoveredBox === 'imgGlow5' ? 'on' : ''}` } 
                alt='team gen'/>
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
                <div className='column_box contentFrames' 
                id = 'imgGlow6'
                onClick={links.dayplannerLink}
                onMouseOver={(event) => handleMouseEnter(event)}
                onMouseOut={handleMouseLeaves}>
                    <div className="mockFrame">
                    <img src = { images.day_plannerAvif }
                    className={`img ${hoveredBox === 'imgGlow6' ? 'on' : ''}` } 
                    alt='day planner'/>
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