import React, { Fragment, useState } from "react";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [inputAmount, setInputAmount] = useState(0);

  const removeItemHandler = (e) => {
    e.preventDefault();

    setInputAmount((prevAmount) => {
      if (prevAmount < 1) return prevAmount;
      return prevAmount - 1;
    });
  };

  const addItemHandler = (e) => {
    e.preventDefault();

    setInputAmount((prevAmount) => {
      return prevAmount + 1;
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputAmount === 0) {
      return alert("Please select an item.");
    }

    setInputAmount(0);
    props.onAddToCart(inputAmount);
  };

  return (
    <Fragment>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes["top-row"]}>
          <button
            className={classes["button-minus"]}
            onClick={removeItemHandler}
          >
            -
          </button>
          <span className={classes.input} value={inputAmount}>
            {inputAmount}
          </span>
          <button className={classes["button-plus"]} onClick={addItemHandler}>
            +
          </button>
        </div>
        <div className={classes["botton-row"]}>
          <button type="submit" className={classes["button-submit"]}>
            + Add
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default MealItemForm;
