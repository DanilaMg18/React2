import React from 'react'
import Card from './Product'
import data from '../Data.js'

function Footer() {
    let list = data.map((card,idx) => {
        return <Card key={idx} data={card}/>
    })

    return(
      <div className='card-wrapper2'>
        {list}
      </div>
    )
}

export default Footer;