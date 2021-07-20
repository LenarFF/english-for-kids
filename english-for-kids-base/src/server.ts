import { Category } from "./types";

const baseURL = 'http://localhost:8000/api/'

export const getCategories =  () => {
  return fetch(`${baseURL}categories`).then( response => response.json())
};