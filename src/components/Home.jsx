import React from 'react'

// import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import Header from './Header';
// import Thank  from "../assets/Thank.gif"
import Fast from "../assets/Fast.gif"
const Home = () => {


  const navigate=useNavigate()
  const handleMenu=()=>{
    navigate('/Cards')
  }
  return (
    <div>       
    <Header/>
    <div className='home col-md-12 justify-content-center align-items-center'>
    <img src={Fast} alt=""/>
           <h1 >Welcome to Food's Kitchen</h1>
           <button className='btn' style={{background: "#303F9F", color:"white"}} onClick={handleMenu}>GO TO MENU</button>
    </div>
     </div>
  )
}

export default Home