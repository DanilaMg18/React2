import React from 'react'
import Card from './Product'
import data from '../Data'

function Footer() {
    let list = data.map(card => {
        return <Card data={card}/>
    })

    return(
      <div className='card-wrapper2'>
        {list}
      </div>
    )
}

export default Footer;