import React, { Fragment } from "react";
import MealsAvailable from "./MealsAvailable";
import MealsSummary from "./MealsSummary";

import classes from "./Meals.module.css";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary></MealsSummary>
      <MealsAvailable></MealsAvailable>
    </Fragment>
  );
};

export default Meals;
