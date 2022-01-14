import React, { useState } from "react";
import MealDataService from "../services/Meal.service";

const AddMealForm = () => {
  const INITIALMEALSTATE = {
    title: "",
    description: "",
    location: "",
    price: "",
    max_seats: "",
    available_seats: "",
    date: "",
  };
  const [meal, setMeal] = useState(INITIALMEALSTATE);
  const [error, setError] = useState(null);
  const [submited, setSubmited] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMeal({ ...meal, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmited(true);

    const data = {
      title: meal.title,
      description: meal.description,
      location: meal.location,
      price: meal.price,
      max_seats: meal.max_seats,
      available_seats: meal.max_seats,
      date: meal.date,
    };

    MealDataService.create(data)
      .then((response) => response.json())
      .then((response) => {
        if (!response.ok) {
          setError(response.meta.errors);
        }
        setMeal(INITIALMEALSTATE);
      })
      .catch((error) => console.log(error));
  };

  return (
    <form className='add-meal-form'>
      <fieldset className='fieldset'>
        <legend>Add a new meal:</legend>
        <label htmlFor='title'>Title :</label>
        <input
          type='text'
          id='title'
          name='title'
          required
          autofocus
          value={meal.title}
          onChange={handleInputChange}
        />
        <label htmlFor='description'>Description :</label>
        <textarea
          type='text-area'
          rows="3" cols="30"
          id='description'
          name='description'
          maxLength='200'
          required
          value={meal.description}
          onChange={handleInputChange}
        />
        <label htmlFor='location'>Location :</label>
        <input
          type='text'
          id='location'
          name='location'
          required
          value={meal.location}
          onChange={handleInputChange}
        />
        <label htmlFor='price'>Price :</label>
        <input
          type='number'
          id='price'
          name='price'
          required
          value={meal.price}
          onChange={handleInputChange}
        />
        <label htmlFor='max_seats'>Max seats :</label>
        <input
          type='number'
          id='max_seats'
          name='max_seats'
          required
          value={meal.max_seats}
          onChange={handleInputChange}
        />
        <label htmlFor='date'>Date :</label>
        <input
          type='date'
          id='date'
          name='date'
          required
          value={meal.date}
          onChange={handleInputChange}
        />
        <button type='submit' onClick={handleFormSubmit}>
          Add meal
        </button>
      </fieldset>
      {submited && !error && <p>Meal has been added successfully.</p>}
      {error && (
        <ul style={{ color: "red" }}>
          {error.map((err, index) => (
            <li key={index}>{err.msg}</li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default AddMealForm;