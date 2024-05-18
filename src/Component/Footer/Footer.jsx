import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer(args) {
  const [isOpen, setIsOpen] = useState(false);

  return <div className="footer-container">Copyright © 2024 Talk & Learn 
   All rights are reserved.</div>;
}

export  {Footer} ;