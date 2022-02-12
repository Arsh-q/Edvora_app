import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
const Cart = (props) => {
  // useEffect(
  //   function () {
  //     console.log(localStorage.getItem("price"));
  //     console.log(localStorage.getItem("brand_name"));
  //     console.log(localStorage.getItem("date"));
  //     console.log(localStorage.getItem("discription"));
  //     console.log(localStorage.getItem("image"));
  //     console.log(localStorage.getItem("location"));
  //   },
  //   [props]
  // );
  return (
    <>
      <div className="cart">
        <div className="head">
          <h1>Edvora</h1>
          <h2>Products</h2>
          <h4>
            {localStorage.getItem("product_name") === null
              ? "Product Name"
              : localStorage.getItem("product_name")}
          </h4>
        </div>
        <div className="line"></div>
        <Slider1
          product_name={props.product_name}
          state={props.state}
          city={props.city}
          price={props.price}
        />
        <div className="head">
          <h4>
            {localStorage.getItem("product_name") === null
              ? "Product Name"
              : localStorage.getItem("product_name")}
          </h4>
        </div>
        <div className="line"></div>
        <Slider2
          product_name={props.product_name}
          state={props.state}
          city={props.city}
          price={props.price}
        />
      </div>
    </>
  );
};
export default Cart;
