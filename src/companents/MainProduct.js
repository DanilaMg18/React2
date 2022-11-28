import React from "react";

function MainCard(props) {
    return(
        <div className="main-block">
            <p className="main-text">{props.data2.title}</p>
        </div>
    )
}

export default MainCard