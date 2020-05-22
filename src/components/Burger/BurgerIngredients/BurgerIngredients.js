import React, { Component } from "react";
import PropTypes from "prop-types";
import "./BurgerIngredients.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case "breadBottom":
        ingredient = <div className="BreadBottom" />;
        break;
      case "breadTop":
        ingredient = <div className="BreadTop" />;
        break;
      case "meat":
        ingredient = <div className="Meat" />;
        break;
      case "cheese":
        ingredient = <div className="Cheese" />;
        break;
      case "salad":
        ingredient = <div className="Salad" />;
        break;
      case "bacon":
        ingredient = <div className="bacon" />;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
