import React, { Fragment, useState } from "react";
import MealItem from "./MealItem/MealItem";

import classes from "./MealsAvailable.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Cinnamon Roll",
    description: "Fresh, soft bread with cinnamon",
    price: 4.99,
    image: "../../assets/cinnamon_roll.jpg",
    alt: "A cinnamon roll",
  },
  {
    id: "m2",
    name: "Croissant",
    description: "A soft, light, buttery croissant",
    price: 3.49,
    image: "../../assets/croissant.jpg",
    alt: "Some croissants",
  },
  {
    id: "m3",
    name: "Pain Au Chocolate",
    description: "Soft pastry with rich chocolate",
    price: 3.99,
    image: "../../assets/pain_au_chocolat.jpg",
    alt: "Some pain au chocolats",
  },
  {
    id: "m4",
    name: "Eclair pack",
    description: "3 flavours of scrumptious eclairs",
    price: 6.99,
    image: "../../assets/eclairs.jpg",
    alt: "A selection of eclairs",
  },
  {
    id: "m5",
    name: "Donuts",
    description: "Selection of 5 tasty donuts",
    price: 6.99,
    image: "../../assets/donuts.jpg",
    alt: "Some donuts",
  },
];

const DUMMY_DRINKS = [
  {
    id: "d1",
    name: "Latte",
    description: "A rich, creamy latte",
    price: 1.99,
    image: "../../assets/latte.jpg",
    alt: "A latte",
  },
  {
    id: "d2",
    name: "Cappucino",
    description: "Foamy, yummy warmness",
    price: 2.49,
    image: "../../assets/cappucino.jpg",
    alt: "A cappucino",
  },
  {
    id: "d3",
    name: "Americano",
    description: "Strong, authentic coffee flavour",
    price: 1.99,
    image: "../../assets/americano.jpg",
    alt: "An americano",
  },
  {
    id: "d4",
    name: "Macchiato",
    description: "Luxurious, sweet delight",
    price: 2.49,
    image: "../../assets/macchiato.jpg",
    alt: "A macchiato",
  },
  {
    id: "d5",
    name: "Hot Chocolate",
    description: "Smooth, velvety chocolate",
    price: 2.49,
    image: "../../assets/hot_chocolate.jpg",
    alt: "A cup of hot chocolate",
  },
];

const MealsAvailable = () => {
  const [mealsState, setMealsState] = useState(true);
  const [drinksState, setDrinksState] = useState(false);

  const mealsListHandler = (e) => {
    e.preventDefault();

    setMealsState(true);
    setDrinksState(false);
  };

  const drinkListHandler = (e) => {
    e.preventDefault();

    setDrinksState(true);
    setMealsState(false);
  };

  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        image={meal.image}
        alt={meal.alt}
      ></MealItem>
    );
  });

  const drinksList = DUMMY_DRINKS.map((drink) => {
    return (
      <MealItem
        key={drink.id}
        id={drink.id}
        name={drink.name}
        description={drink.description}
        price={drink.price}
        image={drink.image}
        alt={drink.alt}
      ></MealItem>
    );
  });

  return (
    <Fragment>
      <section className={classes["meals-section"]}>
        <div className={classes.meals}>
          <div>
            <button
              onClick={mealsListHandler}
              className={`${classes["btn-list"]} ${classes["btn-meals"]} ${
                mealsState ? null : classes["btn-inactive"]
              }`}
            >
              Snacks
            </button>
            <button
              onClick={drinkListHandler}
              className={`${classes["btn-list"]} ${classes["btn-drinks"]} ${
                drinksState ? null : classes["btn-inactive"]
              }`}
            >
              Drinks
            </button>
          </div>
          {mealsState ? (
            <ul className={classes.list}>{mealsList}</ul>
          ) : (
            <ul className={classes.list}>{drinksList}</ul>
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default MealsAvailable;
