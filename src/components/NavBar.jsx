import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar.css';

import {BsCart} from "react-icons/bs";


function NavBar() {
  return (
    <nav className='nav'>
      <h1>Proteina</h1>        
        <h3><Link to='/' className='deo'>Proizvodi</Link></h3>
        <div className="korpa"><h3><Link to='/korpa' className='deo'>Korpa  <BsCart/></Link></h3></div>
    </nav>
  )
}

export default NavBar
