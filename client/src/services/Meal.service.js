/* eslint-disable import/no-anonymous-default-export */
const MEALSURL = "https://share-meal.herokuapp.com/api/meals";

const get = async id => {
  return fetch(`${MEALSURL}/${id}`).then((response) => response.json());
  
};

const getAll = async () => {
 return fetch(MEALSURL).then((response) => response.json());
};

const create = async (data) => {
  return fetch(MEALSURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
};

const update = async (id ,data) => {
  return fetch(`${MEALSURL}/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
};

const findByTitle = async title => {
  return fetch(`${MEALSURL}?title=${title}`).then((response) => response.json());
 };

export default {
  get,
  getAll,
  create,
  update,
  findByTitle,
};
