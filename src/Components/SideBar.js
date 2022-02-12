/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./SideBar.css";
import Dropdown from "./Dropdown";
function SideBar(props) {
  const [city, setCity] = useState();
  const [price, setPrice] = useState();
  const [state, setState] = useState();
  const [product, setProduct] = useState();
  return (
    <>
      <div className="SideBar">
        <div className="input">
          <p>Filters</p>
          <div></div>
        </div>
        <Dropdown
          onChange={props.changeProduct2(product)}
          onChange={props.changeCity2(city)}
          onChange={props.changeState2(state)}
          onChange={props.changePrice2(price)}
          changeCity={(city) => setCity(city)}
          changePrice={(price) => setPrice(price)}
          changeState={(state) => setState(state)}
          changeProduct={(product) => setProduct(product)}
        />
      </div>
    </>
  );
}

export default SideBar;
