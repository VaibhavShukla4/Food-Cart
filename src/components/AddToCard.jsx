import React, {useState,useEffect}from 'react'
import Checkout from '../pages/Checkout';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {  Add, DeleteQnty } from '../redux/actions/action';

const AddToCart = () => {

  const [data, setData] = useState([])

  const { id } = useParams();
  console.log(id);

  const getData = useSelector((state) => state.cartReducer.carts);

  const compare = () => {
    let compareData = getData.filter((item) => {
        return item.id === id;

    });
    setData(compareData);
}

  useEffect(() => {
    compare();
}, [id]);

const dispatch = useDispatch();
    

    const incrementQuantity = (e) => {
        dispatch(Add(e));
    }
    const decrementQuantity = (e) => {
        dispatch(DeleteQnty(e));
    }


  const navigation =useNavigate()
const handleClick =()=>{
  
  navigation("./Checkout");
}

  return (
    <div>
    <Navbar/>
    <div className='container mt-2'>
    <div className='constainer mt-4 d-flex justify-content-center'>
      {data.map((item, index) => (
        <div>
        <div className='cart-details'
         key={index}
         >
          <div className='cart-img'>
            <img 
            src={item.image}
              style={{height:"16rem"}}
              alt="image-food"
            />
          </div>
          </div>
          <div className='details'>
            <div className=''>
              <div className='row '>
              <div className='col-6 '>
                    <p>{item.name}</p>
                    <p><strong>Price:</strong>
                    {item.name}
                    </p>
                    <p><strong>Total:</strong>{item.qnty}</p>
                    <p><strong>Cost:(INR)</strong>{item.price*item.qnty}</p>
                </div>
                <button
                      className="btn btn-primary mx-1"
                      onClick={() => incrementQuantity(item)}
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
                      onClick={() => decrementQuantity(item)}
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
      <button className='butt d-flex justify-content-center flex-wrap align-items-center'  onClick={handleClick}>Proceed</button>
              </div>
            </div>
          </div>
        </div>
      )) }
    </div>
    </div>
    </div>
);
}
    
  

export default AddToCart