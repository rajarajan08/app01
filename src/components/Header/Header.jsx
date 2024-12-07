import React from "react";
import "./Header.css";
import headerbg from "../../assets/h2.png";

const headerStyle = {
  height: "46vw",
  margin: "30px auto",
  position: "relative",
  borderRadius: "10px",
  background: `url(${headerbg}) no-repeat`,
  backgroundSize: "contain",
};

const Header = () => {
  return (
    <div className="header" style={headerStyle}>
      <div className="header-content">
        <h2>Order and Stay relax</h2>
        <p>
          Your one-stop delivery app for the freshest fruits, veggies, and
          everyday groceries. Convenient, quick, and reliable service at your
          fingertips. Freshness guaranteed, delivered straight to your door!
        </p>
        <button>view menu</button>
      </div>
    </div>
  );
};

export default Header;
