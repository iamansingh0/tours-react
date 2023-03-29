import React from 'react'
import logo from '../images/logo.jpg'

const NavHeader = () => {
  return (
    <div className="nav-header">
      <img src={logo} className="nav-logo" alt="escape reality" />
      <button type="button" className="nav-toggle" id="nav-toggle">
        <i className="fas fa-bars"></i>
      </button>
    </div>
  )
}

export default NavHeader
