import React from 'react'
import NavHeader from './NavHeader'
import NavLinks from './NavLinks'
import NavIcons from './NavIcons'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <NavHeader />
        <NavLinks />
        <NavIcons />
      </div>
    </nav>
  )
}

export default NavBar
