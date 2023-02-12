import React, { Fragment } from "react";

import classes from "./PlusButton.module.css";

const PlusButton = (props) => {
  return (
    <Fragment>
      <button className={classes.button} onClick={props.onClick}>
        +
      </button>
    </Fragment>
  );
};

export default PlusButton;
