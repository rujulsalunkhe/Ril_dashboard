import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const location = useLocation();
  const [title, setTitle] = useState("");

  React.useEffect(() => {
    // Set page title dynamically based on route
    const path = location.pathname;
    switch (path) {
      case "/":
      case "/dashboard":
        setTitle("Dashboard");
        break;
      case "/instrument":
        setTitle("Instrument");
        break;
      case "/workorder":
        setTitle("Work Order");
        break;
      case "/report":
        setTitle("Report");
        break;
      default:
        setTitle("ECalibration");
    }
  }, [location]);

  return (
    <div
      style={{
        height: "63px",
        width: "100%", // Ensures the navbar spans the entire width of the screen
        background: "linear-gradient(90deg, #00A450 0%, #003E1E 100%)",
        display: "flex",
        alignItems: "center",
        position: "absolute",  // This ensures the navbar stays at the top of the page
        top: 0,
        left: 0,
        zIndex: 1,
        paddingLeft: isSidebarOpen ? "300px" : "100px", // Adjust padding based on sidebar state
        transition: "padding-left 0.3s ease-in-out", // Smooth transition for the toggle movement
        boxSizing: "border-box", // Prevents horizontal overflow by including padding in width calculation
      }}
    >
      <div
        style={{
          cursor: "pointer",
          fontSize: "20px",
          color: "white",
          marginLeft: "15px", // Left margin to space the toggle button a bit
        }}
        onClick={toggleSidebar}
      >
        <FaBars />
      </div>
      <div
        style={{
          color: "white",
          fontSize: "30px",
          fontFamily: "JioType Var",
          fontWeight: "500",
          wordWrap: "break-word",
          textAlign: "center",
          flex: 1,  // Allows space for the toggle button on the left
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default Navbar;
