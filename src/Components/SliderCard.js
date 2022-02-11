import React from "react";
import "./SliderCard.css";

const SliderCard = () => {
  return (
    <>
      <div className="slider-card">
        <div className="row">
          <div className="col-4">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/5ec595d45f39760007b05c07/0x0.jpg?format=jpg&crop=1491,1490,x989,y74,safe&fit=crop"
              alt=""
            />
          </div>
          <div className="col-8 details">
            <p>Product Name</p>
            <p style={{opacity:'60%'}}>Brand Name</p>
            <p>$99</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderCard;
