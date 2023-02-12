import React, { Fragment, useContext } from "react";
import MealItemForm from "./MealItemForm";

import CartContext from "../../../store/cart-context";

import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `£${props.price}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes["list-item"]}>
      <div className={classes["item-left"]}>
        <div className={classes["image-box"]}>
          <img
            className={classes["item-image"]}
            src={props.image}
            alt={props.alt}
          />
        </div>
        <div className={classes["item-info"]}>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <span>{price}</span>
        </div>
      </div>
      <div className={classes["item-right"]}>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
