import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

  
  // const dispatch = useDispatch();
  return (
    <nav
      className="d-flex fixed-top  navbar navbar-expand-lg"
      style={{ background: "#303F9F", height: "" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/menu">
          <h4 className="text-light mx-5 ">🍴Food's Restaurent</h4>
        </Link>
        
          
        <div
          className="collapse navbar-collapse float-right"
          
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item float-right">
              <Link className="nav-link" to="/checkout">

                <h5 className="text-light" >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    className="bi bi-cart4 "
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                </h5>
              </Link>
            </li>
            <li><Link to="/login"><h4 className="login text-light mx-5" style={{cursor:"pointer"}}>Login</h4></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
