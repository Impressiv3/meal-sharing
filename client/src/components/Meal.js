import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";

const Meal = ({ meal }) => {
  const imagesArray = [image1, image2, image3, image4, image5];

  const randomImage = (imagesArray) => {
    return imagesArray[Math.floor(Math.random() * imagesArray.length) + 0];
  };

  return (
    <li className='meals-list-item'>
      <h2>{meal.title}</h2>
      <img src={randomImage(imagesArray)} alt='' />
      <p>{meal.description}</p>
      <h4>Location: {meal.location}</h4>
      <h4>Available seats: {meal.available_seats}</h4>
      <h2>Price: {meal.price},00 Kr.</h2>
      <p>Rating: {"⭐".repeat(Math.floor(Math.random() * 4) + 3)}</p>
      <footer>
        <Link to={`/meal/${meal.id}`}>
          <button
            className={meal.available_seats <= 0 ? "muted-button" : "button"}
            disabled={meal.available_seats <= 0}
          >
            {meal.available_seats > 1 ? "Reserve" : "Full"}
          </button>
        </Link>
        <button className='accent-button'>Reviews</button>
      </footer>
    </li>
  );
};

export default Meal;
