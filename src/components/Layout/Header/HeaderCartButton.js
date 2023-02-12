import React, { Fragment, useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";
import { AiOutlineShoppingCart } from "react-icons/ai";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const cartItemsAmount = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Fragment>
      <div className={classes["button-wrapper"]}>
        <button className={btnClasses} onClick={props.onClick}>
          <AiOutlineShoppingCart className={classes["cart-icon"]} />
          Your cart <span className={classes.counter}>{cartItemsAmount}</span>
        </button>
      </div>
    </Fragment>
  );
};

export default HeaderCartButton;
