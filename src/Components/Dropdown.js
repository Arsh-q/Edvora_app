import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dropdown.css";

const Dropdown = (props) => {
  const [product, setProduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedState, setSelectedState] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);

  const getUnique = (arr, comp) => {
    const unique = arr
      .map((e) => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter((e) => arr[e])
      .map((e) => arr[e]);
    return unique;
  };
  useEffect(function () {
    axios
      .get("https://assessment-edvora.herokuapp.com/")
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      })
      .then((error) => console.log(error));
  }, []);

  const uniqueProduct = getUnique(product, "product_name");

  // console.table(product);
  const handleState = (user) => {
    // const uniqueState = getUnique(user, "state");
    if (user.product_name === selectedProduct) {
      return (
        <>
          <option value={user.address.state}>{user.address.state}</option>
        </>
      );
    }
  };

  useEffect(
    function () {
      product.map((pro) => handleBrand(pro));
    },
    [selectedCity]
  );
  const handleBrand = (user) => {
    if (
      user.product_name === selectedProduct &&
      user.address.city === selectedCity &&
      user.address.state === selectedState
    ) {
      // console.log(user.brand_name);
      localStorage.setItem("brand_name", user.brand_name);
      localStorage.setItem("product_name", selectedProduct);
      localStorage.setItem("price", user.price);
      localStorage.setItem("date", user.date);
      localStorage.setItem("discription", user.discription);
      localStorage.setItem("image", user.image);
      localStorage.setItem("location", selectedState);
    } else {
      console.log("no data");
    }
  };
  const handleCity = (user) => {
    if (user.address.state === selectedState) {
      return (
        <>
          <option value={user.address.city}>{user.address.city}</option>
        </>
      );
    }
  };

  return (
    <>
      <select
        className="form-control col-9"
        value={selectedProduct}
        onChange={(e) => {
          setSelectedProduct(e.target.value);
          console.log(e.target.value);

          props.changeProduct(e.target.value);
        }}
      >
        <option value="0">Product</option>
        {uniqueProduct.map((user) => (
          <option key={user.id} value={user.product_name}>
            {user.product_name}
          </option>
        ))}
      </select>
      <select
        className="form-control col-9"
        value={selectedState}
        onChange={(e) => {
          setSelectedState(e.target.value);
          console.log(e.target.value);

          props.changeState(e.target.value);
        }}
      >
        <option value="0">State</option>
        {product.map((user) => handleState(user))}
      </select>
      <select
        className="form-control col-9"
        value={selectedCity}
        onChange={(e) => {
          setSelectedCity(e.target.value);
          console.log(e.target.value);
          props.changeCity(e.target.value);
          // props.changeprice(price);
          // console.log(price);
        }}
      >
        <option value="0">City</option>
        {product.map((user) => handleCity(user))}
      </select>
    </>
  );
};

export default Dropdown;
