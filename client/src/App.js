import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import Reservation from "./pages/Reservation";
import Reviews from "./pages/Reviews";
import AddMeal from "./pages/AddMeal";
import MealReservation from "./components/MealReservation";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='meals' element={<Meals />} />
          <Route path='reservation' element={<Reservation />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='add' element={<AddMeal />} />
          <Route path='meal/:mealId' element={<MealReservation />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
