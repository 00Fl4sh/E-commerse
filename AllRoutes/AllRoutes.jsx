import React from 'react'
import { Routes, Route } from "react-router-dom";
import Clothes from '../component/section/Clothes';
import Profile from '../component/Profile/Profile';
import Maincontain from '../component/Main-contain/Maincontain';
import MenSection from '../component/Mens/MenSection';
import WomenSection from '../component/WomenSection/WomenSection';
import Kids from '../component/Kids/Kids';
import Sweater from '../component/Products/mens/Sweater';
// import Swet from '../component/Products/mens/Swet';
import Main from '../component/Main-contain/Main';
import Footer from '../component/Footer/Footer';
import Formal from '../component/categories/Formal';
import Casual from '../component/categories/Casual';
import Sports from '../component/categories/Sports';
import Jacket from '../component/categories/Jacket';
import WFormal from '../component/categories/WFormal';
import WCasual from '../component/categories/WCasual';
import SafetyShoe from '../component/categories/SafetyShoe';
import Wallet from '../component/categories/Wallet';
import Cart from '../component/Cart/Cart';
const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/Clothes" element={<Clothes/>} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/' element={<Maincontain/>}/>
        <Route path='/MenSection' element={<MenSection/>}/>
        <Route path='/WomenSection' element={<WomenSection/>}/>
        <Route path='/Kids' element={<Kids/>}/>
        <Route path='/Sweater' element={<Sweater/>}/>
        <Route path='' element={<Footer/>}/>
        <Route path='/Formal' element={<Formal/>}/>
        <Route path='/Casual' element={<Casual/>}/>
        <Route path='/Sports' element={<Sports/>}/>
        <Route path='/Jacket' element={<Jacket/>}/>
        <Route path='/WFormal' element={<WFormal/>}/>
        <Route path='/WCasual' element={<WCasual/>}/>
        <Route path='/SafetyShoe' element={<SafetyShoe/>}/>
        <Route path='/Wallet' element={<Wallet/>}/>
        <Route path='/Cart' element={<Cart/>}/>


        </Routes>
      
    </div>
  )
}

export default AllRoutes
