import React from "react";
import "./clothes.css";
import { Link } from "react-router-dom";

const Clothes = () => {
  return (
    <div className="container">
      <div id="category">
        <div id="mens">
            <Link to="/MenSection">
          <img
            src="https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67020638_56.jpg?ts=1704972828518&imwidth=480&imdensity=2"
            alt="men"
          />
          </Link>
          <h3>MENS</h3>
          <Link to="/MenSection" className="link">
            <h6>Discover More...</h6>
            </Link>
        </div>

        <div id="womens">
            <Link to="/WomenSection">
          <img
            src="https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67064071_35_D7.jpg?ts=1706630602243&imwidth=280&imdensity=2"
            alt="women"
          />
            </Link>
          <h3>WOMENS</h3>
          <Link to="/WomenSection" className="link"> 
            <h6>Discover More...</h6>
          </Link>
        </div>

        <div id="kids">
            <Link to="/Kids"> 
          <img
            src="https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67024463_02_D5.jpg?ts=1706864627345&imwidth=280&imdensity=2"
            alt="kid"
          />
            </Link>
          <h3>KIDS</h3>
          <Link to="/kids" className="link">
            <h6>Discover More...</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Clothes;
