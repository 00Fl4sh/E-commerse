import React from 'react'
import { Link } from 'react-router-dom'
import './WomenSection.css'
const WomenSection = () => {
    
    const itemData = [
        {
            
          Sweater:'https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67044032_05.jpg?ts=1706531717469&imwidth=480&imdensity=2',
          Shirt:'https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67034041_05.jpg?ts=1704994388080&imwidth=480&imdensity=2',
          Tshirts:'https://shop.mango.com/assets/rcs/pics/static/T6/fotos/outfit/S20/67036325_37-99999999_01.jpg?ts=1706792635528&imwidth=480&imdensity=2',
          westernwear:'https://sslimages.shoppersstop.com/sys-master/images/hf7/h39/31639116578846/AW23LQJ10256_COPPER.jpg_230Wx334H',
          Coat:"https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67094782_08.jpg?ts=1705395789773&imwidth=480&imdensity=2",
          jacket:"https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67054040_81.jpg?ts=1703846025927&imwidth=480&imdensity=2",
          jeans:"https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67074464_56.jpg?ts=1706002403407&imwidth=480&imdensity=2",
          dress:"https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67064035_57.jpg?ts=1705066403587&imwidth=480&imdensity=2",

}    ];
  return (
    <div >
       {itemData.map(items=>(
        <div className='container'>
           <Link to='Sweater' className=''><img className='img' src={items.Sweater} alt="" /><h6>Sweater</h6></Link>
           <Link className=''><img className='img' src={items.Tshirts} alt="" /><h6>TShirt</h6></Link>
           <Link className=''><img className='img' src={items.Shirt} alt="" /><h6>Shirts</h6></Link>
           <Link className=''><img className='img' src={items.westernwear} alt="" /><h6>Western wear</h6></Link>
           <Link className=''><img className='img' src={items.Coat} alt="" /><h6>Coats</h6></Link>
           <Link className=''><img className='img'src={items.dress} alt="" /><h6>Dress</h6></Link>
           <Link className=''><img className='img' src={items.jeans} alt="" /><h6>Jeans</h6></Link>
        </div>

       ))}
       </div>
  )
}

export default WomenSection