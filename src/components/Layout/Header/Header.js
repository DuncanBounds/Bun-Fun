import React, { Fragment } from "react";
import HeaderLogo from "../../Icons/HeaderLogo";
import HeaderCartButton from "./HeaderCartButton";

import { MdOutlineBakeryDining } from "react-icons/md";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <div className={classes.header}>
        <div className={classes["header-box"]}>
          <div className={classes["header-left"]}>
            <MdOutlineBakeryDining className={classes.icon} />
            <h1 className={classes.title}>Bun-Fun</h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;

/*
<HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
*/
