import React from "react";
import "./Cart.css";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
const Cart = () => {
  return (
    <>
      <div className="cart">
        <div className="head">
          <h1>Edvora</h1>
          <h2>Products</h2>
          <h4>Products Name</h4>
        </div>
        <div className="line"></div>
        <Slider1 />
        <div className="head">
          <h4>Products Name</h4>
        </div>
        <div className="line"></div>
        <Slider2 />
      </div>
    </>
  );
};
export default Cart;
