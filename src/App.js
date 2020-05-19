import React, { Component } from "react";
import BurgerBuilder from "../src/containers/BurgerBuilder/BurgerBuilder";
import Layout from "../src/components/Layout/Layout";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
