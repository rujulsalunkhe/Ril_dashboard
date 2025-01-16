import React from 'react';
import { FaTh, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag, FaThList } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const menuItem = [
        { path: "/", name: "Dashboard", icon: <FaTh /> },
        { path: "/about", name: "About", icon: <FaUserAlt /> },
        { path: "/analytics", name: "Analytics", icon: <FaRegChartBar /> },
        { path: "/comment", name: "Comment", icon: <FaCommentAlt /> },
        { path: "/product", name: "Product", icon: <FaShoppingBag /> },
        { path: "/productList", name: "Product List", icon: <FaThList /> }
    ];

    return (
        <div style={{
            display: 'flex', flexDirection: 'column', height: '100vh',
            width: isOpen ? '259px' : '50px', transition: 'width 0.3s',
            backgroundColor: 'white', boxShadow: '3px -3px 20px rgba(0, 0, 0, 0.20) inset',
            paddingTop: '0',  // Ensures there is no space at the top
        }}>
            <div style={{ padding: '16px', display: 'flex', alignItems: 'center' }}>
                <img
                    style={{ width: '182px', height: '91px', display: isOpen ? 'block' : 'none' }}
                    src="./src//assets/Reliance-Industries-Limited-Logo.png"
                    alt="Logo"
                />
            </div>
            <div style={{ flex: 1 }}> {/* Make the sidebar expand to fill available height */}
                {menuItem.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        style={{
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px 20px',  // Horizontal padding added
                            margin: '10px 0',  // Added margin between the NavLinks
                            color: 'white',
                            fontSize: '20px',
                            fontFamily: 'JioType Var',
                            fontWeight: '400',
                            background: 'linear-gradient(90deg, #00A450 0%, #003E1E 100%)',
                            borderRadius: '4px',
                            gap: isOpen ? '10px' : '0',
                            transition: 'all 0.3s',
                        }}
                        activeClassName="active"
                    >
                        <div style={{ fontSize: '1.5rem', color: 'white' }}>{item.icon}</div>
                        <div style={{ display: isOpen ? 'block' : 'none' }}>{item.name}</div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
