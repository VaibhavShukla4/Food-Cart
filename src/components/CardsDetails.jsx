import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "../redux/actions/action";
import Header from "./Header";
import Button from "react-bootstrap/Button";

const CardsDetails = () => {
  const [data, setData] = useState([]);
  // console.log(data);

  const { id } = useParams();
  // console.log(id);

  const history = useNavigate();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const HandleOrder = () => {
    navigate("/Checkout");
  };

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((item) => {
      return item.id === id;
    });
    setData(comparedata);
  };

  // add data

  const send = (item) => {
    // console.log(e);
    dispatch(ADD(item));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/Cards");
  };

  // remove one
  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <div className="container vh-100">
      <Header/>
      <div className="container mt-5" >
        <section className="container  mt-5">
          <div className="iteamsdetails  d-flex justify-content-center align-items-center mt-5">
            {data.map((item, index) => {
              return (
                <div key={index} className=" mx-2 mt-5 d-flex justify-content-center align-items-center">
                  <div className="items_img mt-5 col-sm-6" >
                    <img src={item.image} alt="" className="col-sm-2" />
                  </div>

                  <div className="details col-sm-6 mt-5  mx-5">
                    <Table className="col-sm-6 mt-5">
                      <tr>
                        <td>
                          <span>{item.name}</span>
                          <br/>
                          <br/>
                          <span>
                            {" "}
                            <strong>Price</strong> : ₹{item.price}
                          </span>
                          <br/>
                          <br/>
                          <span>
                            {" "}
                            <strong>Total</strong> : {item.qnty}
                          </span>
                          <br/>
                          <br/>
                          <span>
                            {" "}
                            <strong>Cost</strong> :₹ {item.price * item.qnty}
                          </span>
                          <br/>
                          <br/>
                          <div
                            className="col-sm-6 mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#303F9F",
                              color: "#white",
                            }}
                          >
                            <span
                              style={{ fontSize: 30 ,color:"red"}}
                              onClick={
                                item.qnty === 0
                                  ? () => dlt(item.id)
                                  : () => remove(item)
                              }
                            >
                             <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="45"
                        fill="currentColor"
                        className="col-sm-6 bi bi-dash-lg "
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                        />
                      </svg>
                            </span>
                            <span style={{ fontSize: 22, color:"white"}}>{item.qnty}</span>
                            <span
                              style={{ fontSize: 24 ,color:"red"}}
                              onClick={() => send(item)}
                            >
                              <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="45"
                        fill="currentColor"
                        className="col-sm-6 bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                        />
                      </svg>
                            </span>
                          </div>
                        </td>
                        <td>
                          <Button
                            onClick={HandleOrder}
                            className="col-sm-8 d-flex btn btn-primary mx-5 bg-primary"
                          >
                            Payment Now
                          </Button>
                          <svg
                            onClick={() => dlt(item.id)}
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                              fillRule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                          </svg>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardsDetails;

/**
 *
 *
 * onClick={()=>dlt(item.id)} style={{color:"red",fontSize:20,cursor:"pointer"}}
 */
