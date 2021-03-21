const { default: axios } = require("axios");
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2/";
const pokeAPI_ROUTES = {
  allData: `${POKEAPI_BASE_URL}/`,
  type: `${POKEAPI_BASE_URL}type/`,
};

const network = axios.create();

module.exports = { network, pokeAPI_ROUTES, POKEAPI_BASE_URL };
