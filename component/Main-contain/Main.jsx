import React from "react";
import model from "../../assest/model_1-removebg-preview.png";
import "./Main.css"
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="banner html body">
      <div className="container">
        <div className="slider-container has-scrollbar">
          <div className="slider-item">
            <img
              src={model}
              alt="Mens's latest fashion sale"
              className="banner-img"
              // width="2"
            />

            <div className="banner-content">
              <p className="banner-subtitle">Trending item</p>

              <h2 className="banner-title">Men's latest fashion sale</h2>

              <p className="banner-text">
                starting at Rs <b>200</b>.00
              </p>

              <Link to="/Clothes" className="banner-btn">
                Shop now
              </Link>
            </div>
          </div>

          <div className="slider-item">
            <img
              src={model}
              alt="modern sunglasses"
              className="banner-img"
            />

            <div className="banner-content">
              <p className="banner-subtitle">Trending accessories</p>

              <h2 className="banner-title">Modern sunglasses</h2>

              <p className="banner-text">
                starting at &dollar; <b>15</b>.00
              </p>

              <Link to="/Clothes" className="banner-btn">
                Shop now
              </Link>
            </div>
          </div>

          <div className="slider-item">
            <img
              src={model}
              alt="new fashion summer sale"
              className="banner-img"
            />

            <div className="banner-content">
              <p className="banner-subtitle">Sale Offer</p>

              <h2 className="banner-title">New fashion summer sale</h2>

              <p className="banner-text">
                starting at &dollar; <b>29</b>.99
              </p>

              <Link to="/Clothes" className="banner-btn">
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
