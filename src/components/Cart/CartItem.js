import React from "react";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `£${Number(props.price * props.amount.toFixed(2))}`;

  const price2 = `£${(
    (props.price * 100 * (props.amount * 100)) /
    10000
  ).toFixed(2)}`;

  return (
    <li className={classes.item}>
      <div className={classes["item-left"]}>
        <h3>{props.name}</h3>
        <div className={classes["left-bottom"]}>
          <h3>{price2}</h3>
          <span>x{props.amount}</span>
        </div>
      </div>
      <div className={classes["item-right"]}>
        <button className={classes["button-remove"]} onClick={props.onRemove}>
          -
        </button>
        <button className={classes["button-add"]} onClick={props.onAdd}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
