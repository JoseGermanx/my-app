

import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar navbar-expand-lg navbar-light bg-light'>
        <ul className='navbar-nav me-auto mb-2 mb-lg-0 flex d-flex space-between'>
            <li className='nav-item'><Link to="/">Home</Link></li>
            <li className='nav-item'><Link to="/contact">Contact</Link></li>
            <li className='nav-item'><Link to="/about">About</Link></li>
        </ul>
    </div>
  )
}

export default NavBar