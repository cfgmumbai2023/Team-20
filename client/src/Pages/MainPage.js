import React from 'react'
import photo from '../Images/backgroundPic.jpg';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div style={{marginTop:'60px'}}>
        <div className='main-div'>
          <Link to={'/register'}><button className='btn'>Register</button></Link>
          <Link to={'/login'}><button className='btn'>Login</button></Link>
        </div>
    </div>
  )
}
