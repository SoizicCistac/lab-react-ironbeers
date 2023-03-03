import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Beers = (props) => {
    const { beers } = props

    console.log("beers page", beers)
  return (
    <div>
        <Header/>
        {
            beers.map((beer) =>{
                return <div className='beerContainer'>
                <div className='beerImg'>
                    <img src={beer.image_url} alt="" />
                </div>
                <div className='beerInfo'>
                    <Link to={"/beers/"+beer._id}>
                        <p className='beerName'>{beer.name}</p>
                    </Link>
                    <p className='beerTagline'>{beer.tagline}</p>
                    <p className='beerContributed'>Created by: {beer.contributed_by}</p>
                </div>
            </div>
            })
        }
        
    </div>
  )
}

export default Beers