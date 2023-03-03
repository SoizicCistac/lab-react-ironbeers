import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header>
            <Link to="/">
                <i className="fa-solid fa-house"></i>
            </Link>
        </header>
    </div>
  )
}

export default Header