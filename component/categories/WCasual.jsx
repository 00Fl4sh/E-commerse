import React, { useState } from "react";
import "./../Products/mens/Swet.css";
const WCasual = () => {
    const itemData = [
    {
      img: "https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67035984_07.jpg?ts=1704989028453&imwidth=499&imdensity=2",
      img2: "https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67035984_07_R.jpg?ts=1704989028453&imwidth=499&imdensity=2",
      title: "Clothes",
      Name: "Jacket",
      author: "@bkristastucchio",
      featured: true,
      offer: "15%",
      sub: "Mens Winter Leathers Jackets",
      price: "248",
      mainprice: "399",
    },
    {
      img: "https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67076725_09.jpg?ts=1709541214230&imwidth=494&imdensity=2",
      img2: "https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67076725_09_D5.jpg?ts=1709893033129&imwidth=494&imdensity=2",
      title: "Teens Wear",
      Name: "Jacket",
      author: "@rollelflex_graphy726",
      offer: "5%",
      sub: "Mens Winter Leathers Jackets",
      price: "269",
      mainprice: "299",
    },
    {
      img: "https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67035980_78.jpg?ts=1709035411620&imwidth=494&imdensity=2",
      img2: "https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67035980_78.jpg?ts=1709035411620&imwidth=494&imdensity=2 ",
      title: "T-shirts",
      Name: "Jacket",
      author: "@helloimnik",
      sub: "Mens Winter Leathers Jackets",
      price: "299",
      mainprice: "499",
    },
    {
      img: "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67040646_40.jpg?ts=1705426396290&imwidth=480&imdensity=2",
      title: "Trousers",
      Name: "Jacket",
      author: "@nolanissac",
      cols: 2,
      sub: "Mens Winter Leathers Jackets",
      price: "648",
      mainprice: "599",
    },
    {
      img: "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67050652_08.jpg?ts=1702380835304&imwidth=480&imdensity=2",
      title: "Hoodies",
      author: "@arwinneil",
      featured: true,
      price: "289",
      mainprice: "499",
    },
    {
      img: "https://sslimages.shoppersstop.com/sys-master/images/hf7/h39/31639116578846/AW23LQJ10256_COPPER.jpg_230Wx334H",
      title: "Western Wear",
      author: "@tjdragotta",
      price: "289",
      mainprice: "299",
    },
    {
      img: "https://sslimages.shoppersstop.com/sys-master/images/h8b/hed/30726152126494/A23FOXCHK93BR_BROWN.jpg_230Wx334H",
      title: "Casual Wear",
      author: "@katie_wasserman",
    },
    {
      img: "https://sslimages.shoppersstop.com/sys-master/images/hf1/h7b/30387382222878/AW23HCTU23226_MAROON.jpg_230Wx334H",
      title: "Tops",
      author: "@silverdalex",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://sslimages.shoppersstop.com/sys-master/images/h2f/hb8/31577836453918/A23INFMKU2483_MINT.jpg_230Wx334H",
      title: "Tradinational",
      author: "@shelleypauls",
    },
    {
      img: "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/outfit/S20/67010642_BB-99999999_01.jpg?ts=1699284777827&imwidth=480&imdensity=2",
      title: "Jeans",
      author: "@peterlaster",
    },
    {
      img: "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67075139_37.jpg?ts=1706023993697&imwidth=480&imdensity=2",
      title: "Jackets",
      author: "@southside_customs",
    },
  ];
  const [liked, setLiked] = useState(Array(itemData.length).fill(false)); // State to track if each item is liked

  const handleLike = (index) => {
    const updatedLiked = [...liked];
    updatedLiked[index] = !updatedLiked[index]; // Toggle the liked state for the clicked item
    setLiked(updatedLiked);
  };

  return (
    <div className="product-container">
      <div className="container">
        <div className="product-grid">
          {itemData.map((item, index) => (
            <div className="showcase" key={index}>
              <div className="showcase-banner">
                <img
                  src={item.img}
                  alt="Mens Winter Leathers Jackets"
                  width="300"
                  className="product-img default"
                />
                <img
                  src={item.img2}
                  alt="Mens Winter Leathers Jackets"
                  width="300"
                  className="product-img hover"
                />

                <p className="showcase-badge">{item.offer}</p>

                <div className="showcase-actions">
                  <button className="btn-action" onClick={() => handleLike(index)}>
                    <ion-icon id="heart"
                      name={liked[index] ? "heart" : "heart-outline"}
                      className={liked[index] ? "liked" : "" }
                    ></ion-icon>
                  </button>

                  <button className="btn-action">
                    <ion-icon name="eye-outline"></ion-icon>
                  </button>

                  <button className="btn-action">
                    <ion-icon name="repeat-outline"></ion-icon>
                  </button>

                  <button className="btn-action">
                    <ion-icon name="bag-add-outline"></ion-icon>
                  </button>
                </div>
              </div>

              <div className="showcase-content">
                <a href="/" className="showcase-category">
                  {item.Name}
                </a>

                <a href="/">
                  <h3 className="showcase-title">{item.sub}</h3>
                </a>

                <div className="showcase-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                </div>

                <div className="price-box">
                  <p className="price">Rs{item.price}.00</p>
                  <del>Rs{item.mainprice}.00</del>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WCasual;