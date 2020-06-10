import React from "react";
import "./Toolbar.css";
import Logo from "../../../components/Logo/Logo";
import NavItems from "../NavItems/NavItems";
import DrawerToggle from "../../Navigation/SideDrawer/DrawerToggle/DrawerToggle";
const toolbar = props => (
  <header className="Toolbar">
    <DrawerToggle clicked={props.toggleSideDrawer} />
    <Logo height="80%" />
    <nav className="DesktopOnly">
      <NavItems />
    </nav>
  </header>
);

export default toolbar;
