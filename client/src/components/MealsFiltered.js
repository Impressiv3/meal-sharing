import React, { useState, useEffect } from "react";
import Meal from "../components/Meal";
import Spinner from "../components/Spinner";
import { BrowserRouter, Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import MealDataService from "../services/Meal.service";

const MealsFiltered = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ title , setTitle ] = useState("")

  const handleInputChange = (event) => {
    setTitle(event.target.value);
    filterMeals(title)
  };

  const filterMeals = (title) => {  
    setLoading(true);
    MealDataService.findByTitle(title)
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
    <div className='meals-filtered'>
      <div>
        <form>
          <label htmlFor='search'>Search meal:</label>
          <input type='text' id='search' name='search' placeholder='Search meal by title...' value={title} onChange={handleInputChange}/>
        </form>
        <Link to='/meals'>
          <button type='button'>Check out our meals</button>
        </Link>
        <Link to='/add'>
          <button type='button'>Add a new meal</button>
        </Link>
      </div>
      <div>
        {loading ? (
          <Spinner />
        ) : !error ? (
          meals !== [] ? (
            <ul className='meals-list'>
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
    </div>
  );
};

export default MealsFiltered;
