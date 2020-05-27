import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.css";

const buildControls = props => {
  let buildControlList = Object.keys(props.ingredients).map(ing => {
    return (
      <BuildControl
        label={ing}
        key={ing}
        added={() => props.ingredientAdded(ing)}
        removed={() => props.ingredientRemoved(ing)}
        disabled={props.disabled[ing]}
      />
    );
  });
  return <div className="BuildControls">{buildControlList}</div>;
};

export default buildControls;
