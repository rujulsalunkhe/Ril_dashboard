import React from 'react';
import { FaBars } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
    const location = useLocation();

    const menuItem = [
        { path: "/", name: "Dashboard" },
        { path: "/about", name: "About" },
        { path: "/analytics", name: "Analytics" },
        { path: "/comment", name: "Comment" },
        { path: "/product", name: "Product" },
        { path: "/productList", name: "Product List" }
    ];

    const currentPageName = menuItem.find(item => item.path === location.pathname)?.name || "ECalibration";

    return (
        <div
            style={{
                width: '100%',
                height: '63px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#003E1E',
                color: 'white',
                padding: '0 16px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                marginLeft: isSidebarOpen ? '259px' : '50px',  // Adjusting for sidebar width
                transition: 'margin-left 0.3s',  // Smooth transition for margin change
            }}
        >
            <FaBars
                onClick={toggleSidebar}
                style={{
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                    color: 'white',
                }}
            />
            <div
                style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '30px',
                    fontFamily: 'JioType Var',
                    fontWeight: '500',
                    wordWrap: 'break-word',
                    width: '100%',
                    marginLeft: '10px', // Adjust title spacing
                }}
            >
                {currentPageName}
            </div>
            <div style={{ width: '24px' }}></div> {/* Placeholder for alignment */}
        </div>
    );
};

export default Navbar;
