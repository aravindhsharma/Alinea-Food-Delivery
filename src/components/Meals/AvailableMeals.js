import React from "react";

import DUMMY_MEALS from "./DummyMeals";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const AvailableMeals = () => {
  const mealItems = DUMMY_MEALS.map((dummyMeals) => (
    <MealItem
      id={dummyMeals.id}
      key={dummyMeals.id}
      name={dummyMeals.name}
      description={dummyMeals.description}
      price={dummyMeals.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealItems}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
