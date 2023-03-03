import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'

const OneBeer = (props) => {
    const { id } = useParams()
    const { beers } = props

    const oneBeer = beers.filter((beer) => beer._id === id)

    console.log(oneBeer)

  return (
    <div>
        <Header/>
        <div>
            <img src={oneBeer[0].image_url} alt="" />
        </div>
        <h1>{oneBeer[0].name}</h1>
        <p>{oneBeer[0].tagline}</p>
        <p>{oneBeer[0].first_brewed}</p>
        <p>{oneBeer[0].attenuation_level}</p>
        <p>{oneBeer[0].description}</p>
        <p>{oneBeer[0].contributed_by}</p>
    </div>
  )
}

export default OneBeer