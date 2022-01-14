import React, { useState, useEffect } from "react";
import Meal from "../components/Meal";
import Spinner from "../components/Spinner";
import MealDataService from "../services/Meal.service";

const MealsList = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    retrieveMeals();
  }, []);

  const retrieveMeals = () => {
    setLoading(true);
    MealDataService.getAll()
      .then((response) => {
        setMeals(response.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : !error ? (
        meals !== [] ? (
          <ul className="meals-list">
            {meals.map((meal, index) => (
              <Meal key={index} meal={meal} />
            ))}
          </ul>
        ) : (
          <p>There are no meals to display</p>
        )
      ) : (
        <p>There was an error while fetching meals.</p>
      )}
    </div>
  );
};

export default MealsList;
