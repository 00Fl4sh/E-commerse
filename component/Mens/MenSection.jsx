import React from 'react'
import { Link } from 'react-router-dom'
import './MenSection.css'
const MenSection = () => {
    
    const itemData = [
        {
          Sweater:'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1396676_alternate10?$rl_df_pdp_5_7_a10$',
          Tshirts: 'https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67040646_40.jpg?ts=1705426396290&imwidth=480&imdensity=2',
          jeans: 'https://shop.mango.com/assets/rcs/pics/static/T6/fotos/outfit/S20/67010642_BB-99999999_01.jpg?ts=1699284777827&imwidth=480&imdensity=2',
          jacket: 'https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67075139_37.jpg?ts=1706023993697&imwidth=480&imdensity=2',
          Hoodies: 'https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S20/67050652_08.jpg?ts=1702380835304&imwidth=480&imdensity=2',
        }
      ];
  return (
    <div >
       {itemData.map(items=>(
        <div className='container'>
           <Link to="/Sweater" className=''><img className='img'src={items.Sweater} alt="" /><h6>Sweater</h6></Link>
           <Link className=''><img className='img'src={items.Tshirts} alt="" /><h6>TShirt</h6></Link>
           <Link className=''><img className='img'src={items.Hoodies} alt="" /><h6>Hoodies</h6></Link>
           <Link className=''><img className='img'src={items.jeans} alt="" /><h6>Jeans</h6></Link>
           <Link className=''><img className='img'src={items.jeans} alt="" /><h6>Jeans</h6></Link>
           <Link className=''><img className='img'src={items.jeans} alt="" /><h6>Jeans</h6></Link>
        </div>

       ))}
       </div>
  )
}

export default MenSection