import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  function handleLogOut(){
    navigate('/')
  }
  return (
    <div className='home'>
    <h3>Congratulations!, You have Logged In succesfully. :)</h3>
    <h1 className='home-span'>Home Page</h1>
    <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default Home