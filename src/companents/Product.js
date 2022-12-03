import React, {useState} from "react";
import AddToCart from "./button";
import AddSomething from "./plis";

function Card(props) {
    let [number,setNumber] = useState(0)
    let [heart,setHeart] = useState(props.data.isFavorite)
    let [showCart,setShowCart] = useState(true);
    
    let changeFavorite = ()=> {
        setHeart(prev => !prev)
    }
    
    
    let heartImg = heart ? './assets/serdce.svg' : './assets/Vector.svg'

    function changeCartState() {
        setShowCart(prevCart => !prevCart)
        setNumber(prev => prev + 1)
    }

    let changeNumber = () => {
        setNumber(prevNumber => prevNumber + 1)        //Propisat nuzno vtoruju tolko s minusom 
    }

    let changeNumber2 = () => {
        setNumber(prevNumber => {
            if (prevNumber === 0) {
                changeCartState()
                return 0
            }else {
                return prevNumber - 1
            }
        })

    }
    
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
            {showCart && <AddToCart func={changeCartState} />}
            {!showCart && <AddSomething minus={changeNumber2} plus={changeNumber} number={number}/>}

        </div>
    )
}

export default Card