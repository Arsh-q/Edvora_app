import React from "react";
import "./Slider2.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
function Slider1(props) {
  const slideLeft = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const slides = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div id="main-slider-container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={slideLeft}
        />
        <div id="slider2">
          {slides.map((slide, inex) => {
            return (
              <div className="slider-card">
                <div className="row">
                  <div className="col-6 img">
                    <img
                      src="https://imageio.forbes.com/specials-images/imageserve/5ec595d45f39760007b05c07/0x0.jpg?format=jpg&crop=1491,1490,x989,y74,safe&fit=crop"
                      alt=""
                    />
                    <p>Location</p>
                  </div>
                  <div className="col-6 details">
                    <p style={{ fontSize: "15px" }}>Product Name</p>
                    <p style={{ opacity: "60%" }}>Brand Name</p>
                    <p>$99</p>
                    <p>Date: 10:12:2021</p>
                  </div>
                </div>
                <p>Description of the Product/Item</p>
              </div>
            );
          })}
        </div>
        
        <MdChevronRight
          size={40}
          className="slider-icon right"
          onClick={slideRight}
        />
      </div>
    </>
  );
}
export default Slider1;
