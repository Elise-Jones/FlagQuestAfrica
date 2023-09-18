import React from 'react'
import "./NavBar.css"
import {  NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="nav-container">
      <h1> FlagQuest</h1>
      <NavLink to="/" className="homenav">HOME</NavLink>
      <NavLink to="saved" className="savenav">YOUR SAVED FLAGS</NavLink>
    </nav>
  )
}
