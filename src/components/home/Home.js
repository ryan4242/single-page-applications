import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';

const Home = props => {
  return (
    <div className='img-container' >
      <Link to='/order'><button className='cta' >Order!</button></Link>
    </div>
  )
}

export default Home;