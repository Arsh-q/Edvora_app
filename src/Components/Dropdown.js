import React, { useEffect, useState } from "react";
import axios from "axios";

const Dropdown = () => {
  const [product, setProduct] = useState([]);
  const [states, setStates] = useState([]);
  useEffect(function () {
    axios
      .get("https://assessment-edvora.herokuapp.com/")
      .then((response) => setProduct(response.data))
      .then((error) => console.log(error));
  }, []);
  return (
    <>
      <select className="form-control col-9">
        <option value="0">Product</option>
        {product.map((user) => (
          <option value={user.product_name}>{user.product_name}</option>
        ))}
      </select>
      <select className="form-control col-9">
        <option value="0">State</option>
        {product.map((user) => (
          <option value={product.data}>{user.address.state}</option>
        ))}
      </select>
      <select className="form-control col-9">
        <option value="0">City</option>
        {product.map((user) => (
          <option value={product.data}>{user.address.city}</option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
