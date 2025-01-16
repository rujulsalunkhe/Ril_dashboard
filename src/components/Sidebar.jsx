import React from "react";
import { NavLink } from "react-router-dom";
import { FaTh, FaUserAlt, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import "./css/Sidebar.css";

const Sidebar = ({ children, isOpen }) => {
  const menuItems = [
    { path: "/", name: "Dashboard", icon: <FaTh /> },
    { path: "/instrument", name: "Instrument", icon: <FaUserAlt /> },
    { path: "/workorder", name: "WorkOrder", icon: <FaRegChartBar /> },
    { path: "/report", name: "Report", icon: <FaCommentAlt /> },
  ];

  return (
    <div className="container">
      {/* Sidebar and Main Content */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          className="sidebar"
          style={{
            width: isOpen ? "300px" : "100px",
            boxShadow: "3px -3px 20px rgba(0, 0, 0, 0.20) inset",
            height: "calc(100vh)", // Adjust height to account for navbar height
          }}
        >
          <div className="top_section">
            <img
              src="/assets/Reliance-Industries-Limited-Logo.png"
              alt="Logo"
              className="logo"
              style={{
                width: isOpen ? "182px" : "50px",
                marginLeft: isOpen ? "30px" : "15px",
              }}
            />
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
            <div className="logout_button" style={{
      gap: isOpen ? "10px" : "0", // Dynamically adjust gap based on isOpen state
    }}>
              <div className="logout_icon"></div>
              {/* Hide the text and show only the icon when the sidebar is collapsed */}
              <span
                className="logout_text menu_icon"
                style={{ display: isOpen ? "inline" : "none" }}
              >
                Logout
              </span>
              {/* Show the icon even when collapsed */}
              <div style={{ display: isOpen ? "none" : "block" }}>
                {/* Replace with the appropriate icon if needed */}
              </div>
            </div>
          </div>
        </div>
        <main style={{ flex: 1, background: "#fff" }}>{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
