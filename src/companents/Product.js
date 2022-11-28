import React from "react";

function Card(props) {
    return(
        <div className="product-card">
            <div className="product-svg">
                <img src={props.data.svg}></img>
            </div>
            <div className="product-img">
                <img src={props.data.img} alt='wtf'></img>
            </div>
            <div className="product-button">
                <div className="button1"></div>
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
            </div>
            <div className="product-name"><p>{props.data.title}</p></div>
            <div className="product-price">{props.data.price}</div>
        </div>
    )
}

export default Card