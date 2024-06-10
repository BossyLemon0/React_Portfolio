import React, {useState} from "react";

export default function Logo(props){

    const [glow, setGlow] = useState(null)
    function glowLogo (event){
        console.log('in')
        setGlow('on')
    }
    function mouseOut(event){
        setGlow(null)
    }
    return (
    <div className = 'logo'
    onMouseOver={(event)=>glowLogo(event)}
    onMouseOut={mouseOut}>
        {/* Web Developer */}
        <svg width="150" height="20" viewBox="0 0 323 79" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path className={`${glow === 'on' ? 'glowy' : ''}`} d="M155 13.1131C132.5 5.11306 70.4 -7.38694 2 6.61306L0 28.1131L7.5 30.1131C10.0932 52.4774 13.2238 63.0395 22 78.1131L30.5 75.1131C27.5588 70.6687 26.159 67.8157 26.5 58.6131V28.1131C30.1677 17.2323 34.4085 13.1626 46.5 10.1131C71.1638 5.69475 85.1813 5.75685 110.5 10.1131C122.304 12.6833 127.095 15.3243 134 21.1131C136.836 25.0025 137.965 27.5992 139 33.1131V55.6131H150.5L155 39.1131C160.814 32.0045 163.844 32.7199 169 39.1131L173 55.6131H185V33.1131C185.911 28.2919 186.615 25.6196 189.5 21.1131C196.811 14.5902 201.68 12.2732 211.5 10.1131C238.306 6.5567 253.057 5.05608 275 10.1131C288.819 11.6678 293.013 17.1347 298 30.1131V58.1131C298.385 66.0605 297.123 69.689 293 75.1131L301.5 78.6131C310.896 62.979 313.603 52.1602 315 30.1131L322.5 28.1131L320.5 7.11306C319.628 2.20472 221.105 -8.72855 167.5 13.1131H155Z" fill="white"/>
        </svg>
    </div>
    );
}