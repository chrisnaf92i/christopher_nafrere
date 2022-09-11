import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderApp() {
  return (
    <header>
      <h1>Christopher Nafrere</h1>

      <nav>
        <Link to="/acceuil"> <h2> Acceuil </h2> </Link>
        <Link to="/service"> <h2> Mes services </h2> </Link>
        <Link to="/acceuil"> <h2> Qui suis-je ? </h2> </Link>
        <Link to="/acceuil"> <h2> Me contacter </h2> </Link>
      </nav>
    </header>
  )
}
