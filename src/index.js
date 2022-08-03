import React from "react";
import ReactDOM from "react-dom/client";
// import  createRoot  from 'react-dom/client';
import "./index.css";
import App from "./App";
import store from "./store";
import {Provider} from "react-redux"
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
   <BrowserRouter>
      <App />
   </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
reportWebVitals();