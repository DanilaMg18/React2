import React from "react";

export default function AddToCart(props) {
    return(
        <div id="add" className="add" onClick={props.func} > 
            <p className="add-text">Добавить в корзину</p>
        </div>
    )
}