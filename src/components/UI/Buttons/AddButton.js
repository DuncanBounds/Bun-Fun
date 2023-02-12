import React, { Fragment } from "react";

import classes from "./AddButton.module.css";

const AddButton = () => {
  return (
    <Fragment>
      <button className={classes.button}>+ Add</button>
    </Fragment>
  );
};

export default AddButton;
