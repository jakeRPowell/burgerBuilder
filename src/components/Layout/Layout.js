import React, { Component } from "react";
import Aux from "../../HOC/Aux";
import "../Layout/Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <SideDrawer
          display={this.state.showSideDrawer}
          toggleSideDrawer={this.sideDrawerToggleHandler}
        />
        <Toolbar toggleSideDrawer={this.sideDrawerToggleHandler} />
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
