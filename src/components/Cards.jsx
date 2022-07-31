import React,{useState} from "react";
import CardData from './CardData';
import { useSelector, useDispatch } from "react-redux";
import {incNumber,decNumber} from '../redux/action/action'
const Cards = () => {
  const [data] = useState(CardData);

const myState =useSelector((state) => state.changeTheNumber);
 const dispatch = useDispatch();
  
  
  return (
    
      <div className="card_ mx-5 " >
      
        <div className="row ">
        {data.map((item,index) =>{
          return (
            <div
              className="col-md-4 d-flex justify-content-center flex-wrap align-items-center"
              key={index}
            >
              <div
                className="card my-2 "
                style={{ width: "18rem", height: "25rem" }}
              >
                <img
                  src={item.imgdata}
                  className="card-img-top"
                  style={{ width: "285px", height: "13rem" }}
                  alt={`slide ${index + 1}`}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong></strong>
                    {item.rname}
                  </h5>

                  <h6 className="card-title">
                    <strong>Price ₹: </strong>
                    {item.price}
                  </h6>
                  <div >
                    <h6 className="card-title">
                      <strong>Total :</strong>
                      { myState}
                    </h6>
                    <h6 className="card-title">Cost (INR) ₹:{item.price * myState} </h6>
                    <p className="card-text"></p>
                    <button
                      className="btn btn-primary mx-1"
                      onClick={() => dispatch(incNumber(item.qnty))}
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
                      onClick={() => dispatch(decNumber(item.qnty))}
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
                </div>
              </div>
            </div>
          );
        })}        
        </div>
          <br/>
          <br/>
      </div>
    
  );
      };

export default Cards;
