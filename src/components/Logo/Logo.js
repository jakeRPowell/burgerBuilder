import React from "react";
import burgerLogo from "../../Assets/Images/burger.png";
import "./Logo.css";
const logo = props => (
  <div
    className="Logo"
    style={{ height: props.height }}
    onClick={props.clicked}
  >
    <img src={burgerLogo} alt="myBurger" />
  </div>
);

export default logo;
