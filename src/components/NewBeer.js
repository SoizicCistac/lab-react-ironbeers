import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const NewBeer = () => {
    const [ name, setName ] = useState('')
    const [ tagline, setTagline ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ firstBrewed, setFirstBrewed ] = useState('')
    const [ brewersTips, setBrewersTips ] = useState('')
    const [ attenuationLevel, setAttenuationLevel ] = useState(0)
    const [ contributedBy, setContributedBy ] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const beerToCreate = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy
        }

        try {
            await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", beerToCreate)

            navigate("/beers")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <Header/>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input 
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    name="name" 
                    id="name" 
                />
            </div>
            <div>
                <label htmlFor="tagline">Tagline</label>
                <input 
                    onChange={(e) => setTagline(e.target.value)}
                    type="text" 
                    name="tagline" 
                    id="tagline" 
                />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea 
                    onChange={(e) => setDescription(e.target.value)}
                    type="text" 
                    name="description" 
                    id="description" 
                    rows="10" 
                    cols="50"
                />
            </div>
            <div>
                <label htmlFor="firstBrewed">First Brewed</label>
                <input 
                    onChange={(e) => setFirstBrewed(e.target.value)}
                    type="text" 
                    name="firstBrewed" 
                    id="firstBrewed" 
                />
            </div>
            <div>
                <label htmlFor="brewersTips">Brewers Tips</label>
                <input 
                    onChange={(e) => setBrewersTips(e.target.value)}
                    type="text" 
                    name="brewersTips" 
                    id="brewersTips" 
                />
            </div>
            <div>
                <label htmlFor="attenuationLevel">Attenuation Level</label>
                <input 
                    onChange={(e) => setAttenuationLevel(e.target.value)}
                    type="number" 
                    name="attenuationLevel" 
                    id="attenuationLevel" 
                />
            </div>
            <div>
                <label htmlFor="contributedBy">ContributedBy</label>
                <input 
                    onChange={(e) => setContributedBy(e.target.value)}
                    type="text" 
                    name="contributedBy" 
                    id="contributedBy" 
                />
            </div>

            <button>Add New</button>
            
        </form>
    </div>
  )
}

export default NewBeer
