/* eslint-disable import/no-anonymous-default-export */
const RESERVATIONS_URL = "https://share-meal.herokuapp.com/api/reservations";

const get = id => {
  return fetch(`${RESERVATIONS_URL}/${id}`).then((response) => response.json());
};

const getAll = async () => {
 return fetch(RESERVATIONS_URL).then((response) => response.json());
};

const create = async (data) => {
  return fetch(RESERVATIONS_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
};

export default {
  get,
  getAll,
  create,
};
