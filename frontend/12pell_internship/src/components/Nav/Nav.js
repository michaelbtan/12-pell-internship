import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="nav_container">
      <div className="nav_link_container">
      <div className="left_nav">
        <Link className="logo" to='/'><img className="logo_nav" src="https://images.squarespace-cdn.com/content/v1/5ddda4a0bd77ae126a25a85d/1575003500780-BRX3LXE931ZXX02V51NX/Logo+White+Transparent+Small.png" alt="12pell-logo"></img></Link>
      </div>
      <div className="middle_nav">
        <Link className="middle_links" to='/internships'>Internships</Link>
        <Link className="middle_links" to='/Mentors'>Mentors</Link>
        <Link className="middle_links" to='/About'>About</Link>
        <Link className="middle_links" to='/Contact'>Contact</Link>
      </div>
      <div className="right_nav">
        <Link className="right_links" to='/Contact'>signup icon</Link>
      </div>
      </div>
    </div>
  )}
