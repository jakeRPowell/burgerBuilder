import React from "react";
import Aux from "../../../HOC/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li>
        <span style={{ textTransform: "capitalize" }}>
          {props.ingredients[igKey]}
        </span>
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your burger</h3>
      <p>Your burger contains</p>
      <ul>{ingredientSummary}</ul>
      <p>Total price: £{props.price.toFixed(2)}</p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        Proceed
      </Button>
    </Aux>
  );
};

export default orderSummary;
