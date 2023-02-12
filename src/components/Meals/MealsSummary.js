import React, { Fragment } from "react";

import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <Fragment>
      <div className={classes.background}>
        <div className={classes.about}>
          <h2 className={classes.heading}>Sweet treats, delivered to you!</h2>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo error
            voluptatum nihil veritatis numquam reiciendis.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default MealsSummary;
