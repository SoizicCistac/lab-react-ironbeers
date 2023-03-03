import React from 'react'
import Header from './Header'

const RandomBeer = (props) => {

  console.log("random beer", props)
  
  return (
    <div>
        <Header/>
        <div>
            <img src={props.randomBeer.image_url} alt="" />
        </div>
        <h1>{props.randomBeer.name}</h1>
        <p>{props.randomBeer.tagline}</p>
        <p>{props.randomBeer.first_brewed}</p>
        <p>{props.randomBeer.attenuation_level}</p>
        <p>{props.randomBeer.description}</p>
        <p>{props.randomBeer.contributed_by}</p>
    </div>
  )
}

export default RandomBeer