import React from "react";


import Carousel from "../Component/Carousel/Carousel";
import Header from "../Component/Header/Header";
import Welcome from "../Component/HomeComp/Welcome";

import { Footer } from "../Component/Footer/Footer";
import FindAPartner from "../Component/HomeComp/FindAPartner";


export const HomePage = () => {
  console.log("Home Page");
  return (
    <div className="page-layout">
      <Header/>
      <Footer/>
      <Welcome/>
      <FindAPartner/>
    
      <Carousel />
     
      
    </div>
  );
};
