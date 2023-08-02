import React from 'react'
import {  NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">home</NavLink>
      <NavLink to="saved">Saved for Later</NavLink>
    </nav>
  )
}
