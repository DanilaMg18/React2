import React, {useState} from "react";

function Card(props) {
    let [number,setNumber] = useState(0)
    let [heart,setHeart] = useState(props.data.isFavorite)
    let [change,setChange] = useState(props.data.inStash)
    
    let changeFavorite = ()=> {
        setHeart(prev => !prev)
    }
    
    
    let heartImg = heart ? './assets/serdce.svg' : './assets/Vector.svg'

    let changeBlock = () => {
        setChange(prev => !prev)
    }

    let changeNumber =() => {
        setNumber(number+1)           //Propisat nuzno vtoruju tolko s minusom 
        number++
    }

    let changeNumber2 =() => {
        setNumber(number-1)           //Propisat nuzno vtoruju tolko s minusom 
        number++
    }
    
    // function remove(){
    //     document.getElementById("add").remove();
    // }
    


    return(
        <div className="product-card">
            <div>
                <img className='favorite' src={heartImg} onClick={changeFavorite}></img>
            </div>
            <div className="product-img">
                <img className="img" src={props.data.img} alt='wtf'></img>
            </div>
            <div className="product-name"><p>{props.data.title}</p></div>
            <div className="product-price">{props.data.price}</div>
            <div id="add" className="add" src={changeBlock}> 
                <p className="add-text">Добавить в корзину</p>
            </div>
            <div className="plus-minus">
                <div className="minus" onClick={changeNumber2}>
                    <p>-</p>
                </div>
                <div className="amount">
                    <p className="p-number">{number} шт.</p>
                    <p className="p-p">В корзине</p>
                </div>
                <div className="plus" onClick={changeNumber}>
                    <p>+</p>
                </div>
            </div>
        </div>
    )
}

export default Card