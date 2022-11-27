import React from 'react'
import MainCard from './MainProduct'
import data2 from '../data2'

function Main() {
    let list = data2.map(card => {
        return <MainCard data2={card}/>
    })

    return(
      <div className='card-wrapper'>
        {list}
      </div>
    )
}

export default Main;