// src/components/Sidebar.js
import React, { useState } from "react";
import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag, FaThList } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component
import "./css/Sidebar.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItems = [
    { path: "/", name: "Dashboard", icon: <FaTh /> },
    { path: "/about", name: "About", icon: <FaUserAlt /> },
    { path: "/analytics", name: "Analytics", icon: <FaRegChartBar /> },
    { path: "/comment", name: "Comment", icon: <FaCommentAlt /> },
    { path: "/product", name: "Product", icon: <FaShoppingBag /> },
    { path: "/productList", name: "Product List", icon: <FaThList /> },
  ];

  return (
    <div className="container">
      
      {/* Sidebar and Main Content */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          className="sidebar"
          style={{
            width: isOpen ? "259px" : "70px",
            boxShadow: "3px -3px 20px rgba(0, 0, 0, 0.20) inset",
            height: "calc(100vh - 63px)", // Adjust height to account for navbar height
          }}
        >
          <div className="top_section">
            <img
              src="https://via.placeholder.com/182x91"
              alt="Logo"
              className="logo"
              style={{
                width: isOpen ? "182px" : "40px",
                marginLeft: isOpen ? "30px" : "15px",
              }}
            />
            <div
              className="bars"
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              onClick={toggle}
            >
              <FaBars />
            </div>
          </div>
          <div className="menu_items">
            {menuItems.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="menu_link"
                activeClassName="active"
              >
                <div className="menu_icon">{item.icon}</div>
                <div
                  className="menu_text"
                  style={{ display: isOpen ? "block" : "none" }}
                >
                  {item.name}
                </div>
              </NavLink>
            ))}
          </div>
          <div className="logout_section">
            <div className="logout_button">
              <div className="logout_icon"></div>
              <span className="logout_text">Logout</span>
            </div>
          </div>
        </div>
        <main style={{ flex: 1, background: "#fff" }}>{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
