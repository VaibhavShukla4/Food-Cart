import React, { useState } from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import CardData from "./CardData";
import "./style.css";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
import Header from "./Header";

const Cards = () => {
  const [data] = useState(CardData);
  // console.log(data);

  const dispatch = useDispatch();

  const send = (item) => {
    // console.log(e);
    dispatch(ADD(item));
  };

  return (
    <div className="container mt-5">
      <Header />
      <h2 className="text-center">Add to Cart Projects</h2>

      <div className="row  d-flex justify-content-center align-items-center">
        {data.map((item, id) => {
          return (
            <Card
              style={{ width: "25rem", border: "none" }}
              className="mt-5"
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
                <div className=" d-flex justify-content-center align-items-center">
                  <div className="col">
                    <button
                      onClick={() => send(item)}
                      className=" d-flex btn mx-1 text-white"
                      style={{backgroundColor:"#3f51b5"}}
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
                  </div>
                  <div className="col-sm-12">
                    <button
                      disabled={true}
                      className=" d-flex btn btn-danger mx-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-dash-lg "
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;