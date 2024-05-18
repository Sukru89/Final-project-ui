import React from "react";

import Carousel from "../Component/Carousel/Carousel";
import Header from "../Component/Header/Header";


export const HomePage = () => {
  console.log("Home Page");
  return (
    <div className="page-layout">
      <Header/>
      <Carousel />
     
      
    </div>
  );
};
