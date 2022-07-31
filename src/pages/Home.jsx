import React from 'react'

import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
const Home = () => {


  const navigate=useNavigate()
  const handleMenu=()=>{
    navigate('/menu')
  }
  return (
    <div>       
    <Navbar/>
    <div className='home  justify-content-center align-items-center'>
           <h1 >Welcome to Food's Kitchen</h1>
           <button className='btn' style={{background: "#303F9F", color:"white"}} onClick={handleMenu}>GO TO MENU</button>
    </div>
     </div>
  )
}

export default Home