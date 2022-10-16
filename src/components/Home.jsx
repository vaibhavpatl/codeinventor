import React from 'react'

import {Link} from 'react-router-dom'
// import './css/theme.css'
function Home() {
  return (
    <>
      <div className='container d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
        <div className='d-flex flex-row justify-content-center align-items-center'>
          <div>
            <h1 style={{fontSize: 75}}>
            The App that makes coding fun!
            </h1>
            <p>Find coding boring? Try Code Inventor</p>
            <Link to='/login'><button className='btn btn-primary'>Get started</button></Link>
          </div>
          <div>
            <img className='img-fluid' src='./coding.png' style={{width: '50rem'}} />
          </div>
        </div>
      </div>
  </>
  )
}

export default Home