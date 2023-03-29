import React from 'react'
import { pageLinks } from '../data'

const NavLinks = () => {
  return (
    <ul className="nav-links" id="nav-links">
      {pageLinks.map((link) => {
        const { id, href, text } = link
        return (
          <li key={id}>
            <a href={href} className="nav-link">
              {' '}
              {text}{' '}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default NavLinks
