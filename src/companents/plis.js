import React from "react";

export default function AddSomething(props) {
    return(
            <div className="plus-minus">
                <div className="minus" onClick={props.minus}>
                    <p>-</p>
                </div>
                <div className="amount">
                    <p className="p-number">{props.number} шт.</p>
                    <p className="p-p">В корзине</p>
                </div>
                <div className="plus" onClick={props.plus}>
                    <p>+</p>
                </div>
            </div>
    )
}