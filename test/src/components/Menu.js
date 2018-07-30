
import React, {Component} from 'react'
import '../index.css'
import {NavLink} from 'react-router-dom'

export class Menu extends Component {

render() {
  return (
    <div className="menu">
      <p className="logo">Movie List</p>
      <div className="links">
        <div><NavLink exact to = "/">Home</NavLink></div>
        <div><NavLink exact to ="/add-movie">Add Movie</NavLink></div>
        <div><NavLink exact to ="/cart">Cart</NavLink></div>
        <div><NavLink to = "/contact-us">Contact Us</NavLink></div>
      </div>
    </div>
    );
  }
}
