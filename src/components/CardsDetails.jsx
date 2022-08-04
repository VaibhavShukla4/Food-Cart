import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "../redux/actions/action";
import Header from "./Header";
import Button from "react-bootstrap/Button";
import { padding, width } from "@mui/system";

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
      <Header />
      <div className="container mt-5">
        <section className="  mt-5">
          <div className="row iteamsdetails  d-flex justify-content-center align-items-center mt-5">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col mx-2 mt-5 d-flex justify-content-center align-items-center"
                >
                  <div className="details col-sm-6 mt-5  mx-5">
                    <Table className="container col-sm-6  mt-4" >
                      <div className="items_img  col-sm-6" >
                        <img src={item.image} alt="" className="col-sm-2" />
                      </div>
                      <tr className="row">
                        <td className="col" >
                          <strong style={{color:"#303F9F"}}>{item.name}</strong>
                          <br />
                          <br />
                          <strong style={{color:"#303F9F"}}>Price</strong> : ₹{item.price}
                          <br />
                          <span>
                            {" "}
                            <strong style={{color:"#303F9F"}}>Total</strong> : {item.qnty}
                          </span>
                          <br />
                          <span>
                            {" "}
                            <strong style={{color:"#303F9F"}}>Cost</strong> :₹ {item.price * item.qnty}
                          </span>
                          <br />
                          <tr
                            className="d-flex justify-content-center align-items-center"
                            style={{
                              cursor: "pointer",
                              background: "",
                              color: "#white",
                            }}
                          >
                            <Button
                              style={{
                                fontSize: 30,
                                color: "white",
                                paddingLeft: "1rem",
                                paddingRight: "1rem",
                              }}
                              onClick={
                                item.qnty === 0
                                  ? () => dlt(item.id)
                                  : () => remove(item)
                              }
                            >
                              -
                            </Button>
                            <strong
                              style={{
                                fontSize: 20,
                                color: "black",
                                paddingLeft: "10%",
                                paddingRight: "10%",
                              }}
                            >
                              {item.qnty}
                            </strong>
                            <Button
                              style={{
                                fontSize: 30,
                                color: "white",
                              }}
                              onClick={() => send(item)}
                            >
                              +
                            </Button> 
                          </tr>
                        </td>
                        <td>
                        <Button
                          onClick={HandleOrder}
                          className="col-sm-12 mt-1 d-flex justify-content-center align-items-center   bg-primary"
                          style={{
                            fontSize: 19,
                            width: "9rem",
                            marginLeft: "6rem",
                          }}
                        >
                          Payment Now
                        </Button>
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
