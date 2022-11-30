import React from 'react'
import MainCard from './MainProduct'
import data2 from '../data2.js'

function Main() {
    let list = data2.map((card,idx) => {
        return <MainCard key={idx} data2={card}/>
    })

    return(
      <div className='card-wrapper'>
        {list}
      </div>
    )
}

export default Main;