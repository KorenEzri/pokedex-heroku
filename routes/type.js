const { Router } = require("express");
const { network, pokeAPI_ROUTES } = require("../utils/pokeAPI");

const type = Router();

type.get("/", (req, res) => {
  res.send("type route");
});

type.get("/:typeName", async (req, res) => {
  try {
    const pokemonType = req.params.typeName.toLowerCase();
    const address = `${pokeAPI_ROUTES.type}${pokemonType}`;
    console.log(address);
    const { data } = await network.get(`${pokeAPI_ROUTES.type}${pokemonType}`);
    res.send(data);
  } catch ({ message }) {
    console.log(message);
  }
});

module.exports = type;
