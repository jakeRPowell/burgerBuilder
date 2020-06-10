import React, { Component } from "react";
import Aux from "../../../HOC/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("order summary did update");
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li>
          {igKey}:{this.props.ingredients[igKey]}
          <span style={{ textTransform: "capitalize" }} />
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your burger</h3>
        <p>Your burger contains</p>
        <ul>{ingredientSummary}</ul>
        <p>Total price: £{this.props.price.toFixed(2)}</p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          Proceed
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
