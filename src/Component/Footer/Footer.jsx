import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "lightgray",
        padding: "5px 20px",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        zIndex: 999,
      }}
    >
      <p style={{ flex: 1, margin: 0 }}>Copyright © 2024 Talk & Learn All rights reserved.</p>
      <a
        href="mailto:info@talkandlearn.ch"
        style={{ textDecoration: "none", color: "black" }}
      >
        Contact us
      </a>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "white",
            border: "1px solid gray",
            padding: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p>More information about Talk & Learn</p>
          <p>
            <a
              href="mailto:info@talkandlearn.ch"
              style={{ textDecoration: "none", color: "black" }}
            >
              info@talkandlearn.ch
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export { Footer };




