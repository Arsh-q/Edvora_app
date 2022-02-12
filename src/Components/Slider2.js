import React, { useEffect, useState } from "react";
import "./Slider2.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
function Slider2(props) {
  
  useEffect(
    function () {
      localStorage.getItem("price");
      localStorage.getItem("brand_name");
      localStorage.getItem("product_name");
      localStorage.getItem("date");
      localStorage.getItem("discription");
      localStorage.getItem("image");
      localStorage.getItem("location");
    },
    [props]
  );
  useEffect(function () {
    localStorage.clear();
  }, []);
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
                      src={
                        localStorage.getItem("image") === null
                          ? "https://imageio.forbes.com/specials-images/imageserve/5ec595d45f39760007b05c07/0x0.jpg?format=jpg&crop=1491,1490,x989,y74,safe&fit=crop"
                          : localStorage.getItem("image")
                      }
                      alt=""
                    />
                    <p>
                      {localStorage.getItem("location") === null
                        ? "Location"
                        : localStorage.getItem("location")}
                    </p>
                  </div>
                  <div className="col-6 details">
                    <p style={{ fontSize: "15px" }}>
                      {localStorage.getItem("product_name") === null
                        ? "Product Name"
                        : localStorage.getItem("product_name")}
                    </p>
                    <p style={{ opacity: "60%" }}>
                      {localStorage.getItem("brand_name") === null
                        ? "Brand Name"
                        : localStorage.getItem("brand_name")}
                    </p>
                    <p>
                      {" "}
                      {localStorage.getItem("price") === null
                        ? "$ 99"
                        : "$ " + localStorage.getItem("price")}
                    </p>
                    <p>Date: 10:12:2021</p>
                  </div>
                </div>
                <p>
                  {" "}
                  {localStorage.getItem("discription") === null
                    ? "Discription of the Product/Item"
                    : localStorage.getItem("discription")}
                </p>
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
export default Slider2;
