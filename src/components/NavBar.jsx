import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar.css';

function NavBar() {
  return (
    <nav className='nav'>
        <h1>Proteina</h1>
        <Link to='/' className='deo'>Proizvodi</Link>
        <Link to='/korpa' className='deo'>Korpa</Link>
    </nav>
  )
}

export default NavBar
