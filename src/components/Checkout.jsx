import React from "react";
import Header from "./Header";
// import Navbar from "./Navbar";
import Table from "react-bootstrap/Table";
// import Thank from '../assets/Thank.gif'
import thank_ from '../assets/thank_.gif'
const Checkout = () => {
  return (
    <div className="container">
      <Header  />
      <div >
        <div className="details__ d-flex justify-content-center align-items-center mx-5 mt-5">
          <Table className="ckeck ">
          <thead>
          {/* <h2>Thank you for your order </h2> */}
          </thead>
            <tbody>
              <tr>
                <img src={thank_} alt=""
                    style={{height:"42rem",backgroundColor:"#303F9F"}}
                />
              </tr>
            </tbody>
            <tfoot>

            </tfoot>
          </Table>
      </div>
        </div>
    </div>
  );
};

export default Checkout;

/***
 * 
 * 
 *  <div className='container '>
  
  <div className='d-flex justify-content-center align-items-center'>
         <div className="card" style={{width:"70rem", height:"8rem"}} >
          <h3>Checkout</h3>
          <h5>Thank you for your order .</h5>
         </div>
  </div>
    </div>
 */
