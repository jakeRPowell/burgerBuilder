import React from "react";
import Aux from "../../HOC/Aux";
import "../Layout/Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = props => (
  <Aux>
    <Toolbar />
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="Content">{props.children}</main>
  </Aux>
);

export default layout;
