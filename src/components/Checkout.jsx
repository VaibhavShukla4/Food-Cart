import React from "react";
import Header from "./Header";
// import Navbar from "./Navbar";
import Table from "react-bootstrap/Table";

const Checkout = () => {
  return (
    <div>
      <Header />
      <div >
        <div className="details mx-5 " style={{ width:"95%",marginTop:"30%"}}>
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