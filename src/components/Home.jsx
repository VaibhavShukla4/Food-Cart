import React from "react";

// import Navbar from './Navbar'
import { useNavigate } from "react-router-dom";
import Header from "./Header";
// import Thank  from "../assets/Thank.gif"
import Fast from "../assets/Fast.gif";
import { Table } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();
  const handleMenu = () => {
    navigate("/Cards");
  };
  return (
    <div className="container vh-100">
      <Header />
      
          <Table  className="col-md-12 mt-5 justify-content-center align-items-center ">
            <tbody >
              <thead>
              </thead>

                <img
                className="mt-5"
                  src={Fast}
                  alt=""
                  style={{ width: "50rem", height: "30rem" }}
                />
          <h1 className="d-flex justify-content-center align-items-center">
            Welcome to Food's Kitchen
          </h1>
          <button
            className="btn"
            style={{ background: "#303F9F", color: "white" }}
            onClick={handleMenu}
          >
            GO TO MENU
          </button>
            </tbody>
          </Table>
        
    </div>
  );
};

export default Home;
