import React, { useState } from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import CardData from "./CardData";
import "./style.css";

import { ADD } from "../redux/actions/action";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
// import Spinner from "./Spinner";
// import {  useNavigate } from "react-router-dom";
const Cards = () => {
  // const [loading, setLoading] = useState(false);

  // setLoading(true)
  const [data] = useState(CardData);
  // console.log(data);

  // const getdata = useSelector((state) => state.cartreducer.carts);

  const dispatch = useDispatch();

  const send = (item) => {
    // console.log(e);
    dispatch(ADD(item));
  };
  // const navigate = useNavigate();

  

  return (
    <div className="container mt-5">
      <Header />
      <h2 className="text-center">Add to Cart Projects</h2>
      
      <div className="row  d-flex justify-content-center align-items-center">
        {data.map((item, id) => {
          return (
            <Card
              style={{ width: "22rem", border: "none",cursor:"pointer", }}
              className="card_ mt-5 m-1"
              key={id}
            >
              <Card.Img
                variant="top"
                src={item.image}
                style={{ height: "16rem" }}
                className="mt-3"
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Price : ₹ {item.price}</Card.Text>
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-sm-12">
                    <button
                      onClick={() => send(item)}
                      className=" d-flex btn btn-primary mx-1"
                    >
                      Add To Cart
                    </button>
                  </div>
                  
                  
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
        <div></div>
    
    </div>
  );
};

export default Cards;

{
  /* <div className="button_div d-flex justify-content-center">
                    <Button variant="primary"  
                      onClick={()=> send(item)}
                     className='col-lg-12'>Add to Cart</Button>
                    </div> */
}

//   mx-2 mt-5 card_style

/***
                     * 
                     * 
                     *  <div >                  
                    <button
                      className="btn btn-primary mx-1"
                      onClick={() => send(item)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                        />
                      </svg>
                    </button>
                    <button
                      className="btn btn-danger"
                      disabled={true}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-dash-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                        />
                      </svg>
                    </button>
                  </div>
                     */
