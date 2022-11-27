import React from "react";

function MainCard(props) {
    return(
        <div className="main-block">
            <div className="main-blocks"><p className="main-text">{props.data2.title}</p></div>
        </div>
    )
}

export default MainCard