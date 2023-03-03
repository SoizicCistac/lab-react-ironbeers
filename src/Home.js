import React from 'react'
import { Link } from 'react-router-dom'
import Beers from './assets/beers.png'
import NewBeer from './assets/new-beer.png'
import RandomBeer from './assets/random-beer.png'

const Home = () => {
  return (
    <div>
        <div>
            <img src={Beers} alt="" srcset="" />
            <Link to="/beers">
            <h2>Beers</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quaerat nemo veniam quo et itaque dolorum atque, magni odit, porro rem possimus excepturi, consequuntur ea praesentium tempore facere at qui!</p>
            </Link>
        </div>
        <div>
            <img src={RandomBeer} alt="" srcset="" />
            <Link to="/random-beer">
            <h2>Random Beer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quaerat nemo veniam quo et itaque dolorum atque, magni odit, porro rem possimus excepturi, consequuntur ea praesentium tempore facere at qui!</p>
            </Link>
        </div>
        <div>
            <img src={NewBeer} alt="" srcset="" />
            <Link to="/new-beer">
            <h2>New Beer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quaerat nemo veniam quo et itaque dolorum atque, magni odit, porro rem possimus excepturi, consequuntur ea praesentium tempore facere at qui!</p>
            </Link>
        </div>
    </div>
  )
}

export default Home