import React from "react";
import Register1 from "./component/Register1";
import Admin from "./component/Admin";
import Coupon from "./component/Coupon";
import News from "./component/News";
import About from "./component/About";
import Home from "./component/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Login2 from "./component/Login2";
import EditCoupon from "./component/EditCoupon";

const App = () => {
  return (
    <>
     <Navbar/>
      <Routes>
        <Route path="/Admin" element={<Admin/>} />
        
        <Route path="/Login2" element={<Login2 />} />

        <Route path="/Register" element={<Register1  />} />

      <Route path="/Coupon" element={<Coupon />} /> 

        <Route path="/News" element={<News />} />

        <Route path="/About" element={<About/>} />
        <Route path="/EditCoupon" element={<EditCoupon/>} />
        



        <Route path ="/" element={<Home/>} />
       
      </Routes>
      <Footer/>
      
    </>
  );
};

export default App;
