import React from "react";
import "./Nav.css";
import logo from "../../assest/logo/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="html body">
      <div className="header-top">
        <div className="container">
          <ul className="header-social-container">
            <li>
              <a
                href="https://www.google.com"
                target="blank"
                className="social-link"
              >
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a
                href="https://www.google.com"
                target="blank"
                className="social-link"
              >
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a
                href="https://www.google.com"
                target="blank"
                className="social-link"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a
                href="https://www.google.com"
                target="blank"
                className="social-link"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
          </ul>

          <div className="header-alert-news">
            <p>
              <b>Free Shipping</b>
              This Week Order Over - Rs550
            </p>
          </div>

          {/* <div className="header-top-actions">
            <select name="currency">
              <option value="usd">Rs</option>
               <option value="eur">EUR</option> 
            </select>

            <select name="language">
              <option value="en-US">English</option>
              <option value="es-ES">Espa&ntilde;ol</option>
              <option value="fr">Fran&ccedil;ais</option>
            </select>
          </div> */}
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <Link to="/" className="header-logo">
            <img src={logo} alt="PP" width="1px" />
          </Link>

          <div className="header-search-container">
            <input
              type="search"
              name="search"
              className="search-field input"
              placeholder="Enter your product name..."
            />

            <button className="search-btn">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>

          <div className="header-user-actions">
            <Link to="/Profile">
              <button className="action-btn">
                <ion-icon name="person-outline"></ion-icon>
              </button>
            </Link>
            <Link to="/">
              <button className="action-btn">
                <ion-icon name="heart-outline"></ion-icon>
                <span className="count span">0</span>
              </button>
            </Link>
            <Link to="/Cart">
              <button className="action-btn">
                <ion-icon name="bag-handle-outline"></ion-icon>
                <span className="count span">0</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <Link to="/" className="menu-title">
                Home
              </Link>
            </li>

            <li className="menu-category">
              <Link to="/Clothes" className="menu-title">
                Categories
              </Link>

              <div className="dropdown-panel">
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <Link to="/MenSection">Men's</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/Formal">Formal</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/Casual">Casual</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/Sports">Sports</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/Jacket">Jacket</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Sunglasses</Link>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <Link to="/WomenSection">Women's</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/WFormal">Formal</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/WCasual">Casual</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Perfume</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Cosmetics</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Bags</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-category">
              <Link to="/MenSection" className="menu-title">
                Men's
              </Link>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <Link to="/Formal">Shirt</Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/Casual">Shorts & Jeans</Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/SafetyShoe">Safety Shoes</Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/Wallet">Wallet</Link>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <Link to="/WomenSection" className="menu-title">
                Women's
              </Link>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <Link to="/WCasual">Dress & Frock</Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/WCasual">Earrings</Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/WCasual">Necklace</Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/WCasual">Makeup Kit</Link>
                </li>
              </ul>
            </li>

            {/* <li className="menu-category">
              <Link to="/" className="menu-title">
                Jewelry
              </Link>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <Link to="/">Earrings</Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/">Couple Rings</Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/">Necklace</Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/">Bracelets</Link>
                </li>
              </ul>
            </li> */}

            {/* <li className="menu-category">
              <Link to="/" className="menu-title">
                Perfume
              </Link>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <Link to="/">Clothes Perfume</Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/">Deodorant</Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/">Flower Fragrance</Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/">Air Freshener</Link>
                </li>
              </ul>
            </li> */}

            {/* <li className="menu-category">
              <Link to="/" className="menu-title">
                Blog
              </Link>
            </li>

            <li className="menu-category">
              <Link to="/" className="menu-title">
                Hot Offers
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>

      <div className="mobile-bottom-navigation">
        <button className="action-btn" data-mobile-menu-open-btn>
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <button className="action-btn">
          <ion-icon name="bag-handle-outline"></ion-icon>

          <span className="count span">0</span>
        </button>

        <button className="action-btn">
          <ion-icon name="home-outline"></ion-icon>
        </button>

        <button className="action-btn">
          <ion-icon name="heart-outline"></ion-icon>

          <span className="count span">0</span>
        </button>

        <button className="action-btn" data-mobile-menu-open-btn>
          <ion-icon name="grid-outline"></ion-icon>
        </button>
      </div>

      <nav className="mobile-navigation-menu has-scrollbar" data-mobile-menu>
        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>

          <button className="menu-close-btn" data-mobile-menu-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <ul className="mobile-menu-category-list">
          <li className="menu-category">
            <Link to="/" className="menu-title">
              Home
            </Link>
          </li>

          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Men's</p>

              <div>
                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                <ion-icon
                  name="remove-outline"
                  className="remove-icon"
                ></ion-icon>
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Shirt
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Shorts & Jeans
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Safety Shoes
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Wallet
                </Link>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Women's</p>

              <div>
                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                <ion-icon
                  name="remove-outline"
                  className="remove-icon"
                ></ion-icon>
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Dress & Frock
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Earrings
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Necklace
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Makeup Kit
                </Link>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Jewelry</p>

              <div>
                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                <ion-icon
                  name="remove-outline"
                  className="remove-icon"
                ></ion-icon>
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Earrings
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Couple Rings
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Necklace
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Bracelets
                </Link>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Perfume</p>

              <div>
                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                <ion-icon
                  name="remove-outline"
                  className="remove-icon"
                ></ion-icon>
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Clothes Perfume
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Deodorant
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Flower Fragrance
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Air Freshener
                </Link>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <Link to="/" className="menu-title">
              Blog
            </Link>
          </li>

          <li className="menu-category">
            <Link to="/" className="menu-title">
              Hot Offers
            </Link>
          </li>
        </ul>

        <div className="menu-bottom">
          <ul className="menu-category-list">
            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Language</p>

                <ion-icon
                  name="caret-back-outline"
                  className="caret-back"
                ></ion-icon>
              </button>

              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <Link to="/" className="submenu-title">
                    English
                  </Link>
                </li>

                <li className="submenu-category">
                  <Link to="/" className="submenu-title">
                    Espa&ntilde;ol
                  </Link>
                </li>

                <li className="submenu-category">
                  <Link to="/" className="submenu-title">
                    Fren&ccedil;h
                  </Link>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Currency</p>
                <ion-icon
                  name="caret-back-outline"
                  className="caret-back"
                ></ion-icon>
              </button>

              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <Link to="/" className="submenu-title">
                    USD &dollar;
                  </Link>
                </li>

                <li className="submenu-category">
                  <Link to="/" className="submenu-title">
                    EUR &euro;
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="menu-social-container">
            <li>
              <Link to="/" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="/" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="/" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="/" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
