import React from "react";

function Card(props) {
    return(
        <div className="product-card">
            <div className="product-img">
                <img src='./assets/pls.png' alt='wtf'></img>
            </div>
            <div className="product-name"><p>{props.data.title}</p></div>
            <div className="product-price">{props.data.price}</div>
        </div>
    )
}

export default Card