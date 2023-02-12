import React, { Fragment } from "react";

import classes from "./MinusButton.module.css";

const MinusButton = (props) => {
  return (
    <Fragment>
      <button className={classes.button} onClick={props.onClick}>
        -
      </button>
    </Fragment>
  );
};

export default MinusButton;
