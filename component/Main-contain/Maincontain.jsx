import React from "react";
import "./Main-contain.css";
import model from "../../assest/model_1-removebg-preview.png";
import model2 from "../../assest/model_2-removebg-preview.png";
import Button from "@mui/material-next/Button";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import Clothes from "../section/Clothes";

  const Maincontain = () => {
    const itemData = [
      {
        img: 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1396676_alternate10?$rl_df_pdp_5_7_a10$',
        title: 'Clothes',
        author: '@bkristastucchio',
        featured: true,
      },
      {
        img: 'https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67074464_56.jpg?ts=1706002403407&imwidth=480&imdensity=2',
        title: 'Teens Wear',
        author: '@rollelflex_graphy726',
      },
      {
        img: 'https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67040646_40.jpg?ts=1705426396290&imwidth=480&imdensity=2',
        title: 'T-shirts',
        author: '@helloimnik',
      },
      {
        img: 'https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67040646_40.jpg?ts=1705426396290&imwidth=480&imdensity=2',
        title: 'Trousers',
        author: '@nolanissac',
        cols: 2,
      },
      {
        img: 'https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67050652_08.jpg?ts=1702380835304&imwidth=480&imdensity=2',
        title: 'Hoodies',
        author: '@arwinneil',
        featured: true,
      },
      {
        img: 'https://sslimages.shoppersstop.com/sys-master/images/hf7/h39/31639116578846/AW23LQJ10256_COPPER.jpg_230Wx334H',
        title: 'Western Wear',
        author: '@tjdragotta',
      },
      {
        img: 'https://sslimages.shoppersstop.com/sys-master/images/h8b/hed/30726152126494/A23FOXCHK93BR_BROWN.jpg_230Wx334H',
        title: 'Casual Wear',
        author: '@katie_wasserman',
      },
      {
        img: 'https://sslimages.shoppersstop.com/sys-master/images/hf1/h7b/30387382222878/AW23HCTU23226_MAROON.jpg_230Wx334H',
        title: 'Tops',
        author: '@silverdalex',
        rows: 2,
        cols: 2,
      },
      {
        img: 'https://sslimages.shoppersstop.com/sys-master/images/h2f/hb8/31577836453918/A23INFMKU2483_MINT.jpg_230Wx334H',
        title: 'Tradinational',
        author: '@shelleypauls',
      },
      {
        img: 'https://shop.mango.com/assets/rcs/pics/static/T6/fotos/outfit/S20/67010642_BB-99999999_01.jpg?ts=1699284777827&imwidth=480&imdensity=2',
        title: 'Jeans',
        author: '@peterlaster',
      },
      {
        img: 'https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67075139_37.jpg?ts=1706023993697&imwidth=480&imdensity=2',
        title: 'Jackets',
        author: '@southside_customs',
      },
    ];
  return (
    <div>
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
                starting at Rs <b>299</b>.00
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
        <h2 style={{marginLeft:"230px", font:'math'}}>TRENDING CATEGORIES</h2>

        <div className="trending">
          {itemData.map((item)=>(<div className="categories"><img src={item.img} width={180} alt={item.title}/>
          <h6 className="title">{item.title}</h6>
        </div>))}
      </div>
      <div className="winterCollection W-round">
        <h2 className="winterCollection-h"><span className="spam">WINTER</span>COLLECTION 2024</h2><br/>
        <p className="winterCollection-P">This collection features timelessjackets in long cropped cushioned wool,reversable faux shearlings,and Tradinational wool.find the style that work for you.</p>
      </div>
      <div className="d2-round"><img src={model} alt="" /></div>
      <div className="d3-round"><img src={model2} alt="" /></div>

    </div>
  );
  
};

export default Maincontain;
