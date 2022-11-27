import React from 'react'
import Card from './Product'
import data from '../Data'

function Footer() {
    let list = data.map(card => {
        return <Card data={card}/>
    })

    return(
      <div className='card-wrapper2'>
        <div className='wrapper-up'>{list}</div>
        <div className='wrapper-down'>{list}</div>
        <div className='wrapper-down-down'>{list}</div>
      </div>
    )
}

export default Footer;