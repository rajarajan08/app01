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
  const handlePostRequest = async () => {
    const postData = {
      // Include the data you want to send in the request body
      itemName: "value",
      price: 30,
      category: "test",
    };

    try {
      const response = await fetch(
        "https://rajarajan0890.pythonanywhere.com/items",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        alert("Data sent successfully!");
      } else {
        console.error("Error:", response.statusText);
        alert("Failed to send data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending data.");
    }
  };

  return (
    <div className="header" style={headerStyle}>
      <div className="header-content">
        <h2>Order and Stay relax</h2>
        <p>
          Your one-stop delivery app for the freshest fruits, veggies, and
          everyday groceries. Convenient, quick, and reliable service at your
          fingertips. Freshness guaranteed, delivered straight to your door!
        </p>
        <button onClick={handlePostRequest}>view menu</button>
      </div>
    </div>
  );
};

export default Header;
