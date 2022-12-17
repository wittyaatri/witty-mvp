import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  const gettingStarted = {
    width: "500px",
    height: "500px",
  };

  return (
    <div className="container">
      <div style={gettingStarted}>
        <div>Getting Started</div>
        <button className="btn">Sign Up</button>
      </div>
    </div>
  );
};

export default GetStarted;
