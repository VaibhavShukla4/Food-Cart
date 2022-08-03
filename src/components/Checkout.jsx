import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Table from "react-bootstrap/Table";

const Checkout = () => {
  return (
    <div>
      <Header />
      <div >
        <div className="details mx-5 " style={{ width:"90%",marginTop:"20%"}}>
          <Table>
          <thead>
          <h2>Checkout</h2>
          </thead>
            <tbody>
              <tr>
                <td>
                  
                  <h5>Thank you for your order .</h5>
                </td>
              </tr>
            </tbody>
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
