import React, {useState} from "react";

function Card(props) {
    let [hearth,setHearth] = useState(props.data.isFavorite)

    let changeFavorite = ()=> {
        setHearth(prev => !prev)
        return(
            <div>
                <img className="favorite red" src={props.data.svgOnClick}></img>
            </div>
        )
    }

    let hearthClass = hearth ? 'favorite red' : 'favorite'

    return(
        <div className="product-card">
            <div>
                <img className={hearthClass} src={props.data.svg} onClick={changeFavorite}></img>
            </div>
            <div className="product-img">
                <img className="img" src={props.data.img} alt='wtf'></img>
            </div>
            <div className="product-name"><p>{props.data.title}</p></div>
            <div className="product-price">{props.data.price}</div>
            <div className="add">
                <p className="add-text">Добавить в корзину</p>
            </div>
        </div>
    )
}

export default Card