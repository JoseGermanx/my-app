

import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
         <h1>Home</h1>
        <div className="container">
            <h2>Esta info es de importancia</h2>
            <Link to="https://www.google.com">Enlace a Google</Link>
            </div>
    </div>
  )
}

export default Home