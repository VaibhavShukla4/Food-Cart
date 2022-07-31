import React from 'react'
import Cards from '../components/Cards'
import Navbar from '../components/Navbar'
// import img1 from "../assets/img1.avif";
// import img2 from "../assets/img2.avif";
// import img3 from "../assets/img3.avif";
// import img4 from "../assets/img4.avif";
// import img5 from "../assets/img5.avif";
// import img6 from "../assets/img6.avif";
const Menu = () => {
  return (
    <div>
    <Navbar/>
    <Cards />
    </div>
  )
}

export default Menu


/***
 * 
 * <Cards images={[img1,img2,img3,img4,img5,img6]} title={["Massala-Theoryy" , "Jugaadi-Adda" , "La-Milano-Pizzeri" , "Momoman", "Jassi-De-Parathe" , "Anjoy-Latenight-Meals"]} price={["60","100","40","75","90","65"]} />
 */