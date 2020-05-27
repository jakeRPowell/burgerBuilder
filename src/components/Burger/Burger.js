import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }
  console.log(transformedIngredients);
  return (
    <div className="Burger">
      <div className="BreadTop" />
      {transformedIngredients}
      <div className="BreadBottom" />
    </div>
  );
};

export default burger;
