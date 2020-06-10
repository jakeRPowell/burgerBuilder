import React from "react";
import "./NavItems.css";
import NavItem from "../NavItems/NavItem/NavItem";
const navItems = props => (
  <ul className="NavItems">
    <NavItem link="/" active>
      BurgerBuilder
    </NavItem>
    <NavItem link="/">Checkout</NavItem>
  </ul>
);

export default navItems;
