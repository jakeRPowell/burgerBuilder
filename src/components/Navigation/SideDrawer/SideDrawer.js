import React from "react";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../HOC/Aux";
import "./SideDrawer.css";
const sideDrawer = props => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.display) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <Aux>
      <Backdrop show={props.display} clicked={props.toggleSideDrawer} />
      <div className={attachedClasses.join(" ")}>
        <Logo height="60px" />
        <nav>
          <NavItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
