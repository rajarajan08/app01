import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/AssetMapping";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const menuItems = [
    { id: "home", text: "Home" },
    { id: "menu", text: "Menu" },
    { id: "contact", text: "Contact Us" },
    { id: "designer", text: "Designer Details" },
  ];

  const handleClick = (id) => {
    setMenu(id);
  };

  return (
    <div className="navbar">
      <img src={assets.images.mainLogo} className="logo" alt="logo" />
      <ul className="navbar-menu">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={menu === item.id ? "active" : ""}
          >
            {item.text}
          </li>
        ))}
      </ul>
      <div className="navbar-right">
        <img
          src={assets.images.searchIcon}
          className="searchIcon"
          alt="Search Icon"
        />
        <div className="navbar-search-icon">
          <img
            src={assets.images.basketIcon}
            className="basketIcon"
            alt="basket icon"
          />
          <div className="dot"></div>
        </div>
        <button className="button">sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
