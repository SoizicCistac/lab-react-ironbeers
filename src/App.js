import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Home from './Home';
import OneBeer from './components/OneBeer';

function App() {
  const [ beers, setBeers ] = useState([])
  const [ randomBeer, setRandomBeer ] = useState([])

  const fetchBeers = async () => {
    try {
      const raw = await fetch("https://ih-beers-api2.herokuapp.com/beers")
      const res = await raw.json()
      setBeers(res)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchRandomBeer = async () => {
    try {
      const raw = await fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      const res = await raw.json()
      setRandomBeer(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBeers()
    fetchRandomBeer()
  }, [])

  console.log(randomBeer)
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/beers" element={<Beers beers={beers}/>}/>
      <Route path="/random-beer" element={<RandomBeer randomBeer={randomBeer}/>}/>
      <Route path="/new-beer" element={<NewBeer/>}/>
      <Route path="/beers/:id" element={<OneBeer beers={beers}/>}/>
    </Routes>
  );
}

export default App;
