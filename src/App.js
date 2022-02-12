import "./App.css";
import React, { useEffect, useState } from "react";
import SideBar from "./Components/SideBar";
import Cart from "./Components/Cart";
function App() {
  const [city, setCity] = useState();
  const [price, setPrice] = useState();
  const [state, setState] = useState();
  const [product, setProduct] = useState();
  useEffect(function () {
    localStorage.clear();
  }, );
  return (
    <div className="App">
      <div className="p-3" style={{ height: "100%" }}>
        <div className="row mx-auto">
          <div className="col col-lg-3 side-bar">
            <SideBar
              changeCity2={(city) => setCity(city)}
              changePrice2={(price) => setPrice(price)}
              changeState2={(state) => setState(state)}
              changeProduct2={(product) => setProduct(product)}
            />
          </div>
          <div className="col col-lg-9">
            <Cart
              price={price}
              city={city}
              state={state}
              product_name={product}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
