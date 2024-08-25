import React from 'react'
import { Link } from 'react-router-dom'
import "../static/style/nav.css"

const NavCustomerBar = () => (
  // <div class="nav-bar">
  //   <nav>
  //     <Link class="nav-item" to="/">Home</Link>
  //     <Link class="nav-item" to="about">About Us</Link>
  //     <Link class="nav-item" to="contact">Contact Us</Link>
  //   </nav>
  // </div>
  // <div>
    <nav className="navbar">
      <div className="side left-side"></div>
      <div className='navbar-container'>
        <Link class="item" to="/">Home</Link>
        <Link class="item" to="about">About Us</Link>
        <Link class="item" to="contact">Contact Us</Link>
      </div>
      <div className="side left-side"></div>
    </nav>

)

export default NavCustomerBar