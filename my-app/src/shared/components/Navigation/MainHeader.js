//hearder will be the shell that provides all the styling

import React from "react";

import './MainHeader.css';

const MainHeader = props => {
    //allow any renderable component in here
    return <header className="main-header">
        {props.children}
    </header>
};

export default MainHeader;