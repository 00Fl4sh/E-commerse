import React from "react";
import "./Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assest/pp-high-resolution-logo-black-transparent.png";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="navbar">
        <div className="navbar-1">
          <Link to="/" className="nav-item nav-logo">
            <img src={logo} width="100" alt="logo" />
          </Link>
          <div className="navbar-1 s-navbar">
            <Link to="/" className="nav-item nav-btn res-nav">
              <SearchIcon />
            </Link>
            <Link to="/Profile" className="nav-item nav-btn res-nav">
              <AccountCircleIcon />
            </Link>
            <Link to="/" className="nav-item nav-btn res-nav">
              <ProductionQuantityLimitsIcon />
            </Link>
            <Link to="/" className="nav-item nav-btn res-nav">   
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
