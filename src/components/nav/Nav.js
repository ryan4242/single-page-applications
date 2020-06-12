import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

const Nav = props => {
  return (
    <div className='nav-container'>
      <h1>WeEat</h1>
      <nav>
        <Link className='link' to='/' >Home</Link>
      </nav>
    </div>
  )
}

export default Nav;