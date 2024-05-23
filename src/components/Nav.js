import React from "react";
import Logo from "./Logo.js";
import Buttons from "./Buttons.js";

export default function Nav(props){
return( 
<div className = 'nav'>
    <div className = 'nav_items'>
        <Logo />
        <Buttons />
    </div>
</div>
);
}