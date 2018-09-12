import * as React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const Navbar = () => (
   <ul>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    <li><NavLink to="/localPosts">LocalPosts</NavLink></li>
   </ul>
)

export default withRouter(Navbar)
