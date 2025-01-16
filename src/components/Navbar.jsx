// src/components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        height: "63px",
        width: "100vw", // Ensures the navbar spans the entire width of the screen
        background: "linear-gradient(90deg, #00A450 0%, #003E1E 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",  // This ensures the navbar stays at the top of the page
        top: 0,
        left: 0
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "30px",
          fontFamily: "JioType Var",
          fontWeight: "500",
          wordWrap: "break-word",
          textAlign: "center",
        }}
      >
        ECalibration
      </div>
    </div>
  );
};

export default Navbar;
