import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

//sidebar and chat section

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home