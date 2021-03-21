const { Router } = require("express");
const bodyParser = require("body-parser");
const Pokemon = require("../models/PokeCollection");
const collection = Router();

collection.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
collection.use(bodyParser.json());

collection.get("/", async (req, res) => {
  const pokemonCollection = await Pokemon.find({});
  res.send(pokemonCollection);
});

collection.post("/catch", async (req, res) => {
  try {
    const data = req.body;
    const pokemonName = data.name;
    const newPokemon = new Pokemon({
      pokemonId: data.id,
      pokemonData: data,
    });
    try {
      await newPokemon.save();
    } catch (error) {
      return res.send("already caught!");
    }
    res.send(`Added ${pokemonName} to your collection!`);
  } catch ({ message }) {
    console.log(message);
  }
});

collection.delete("/release/:id", async (req, res) => {
  try {
    const pokemonID = req.params.id;
    await Pokemon.deleteOne({ pokemonId: pokemonID });
    res.send("deleted successfully");
  } catch ({ message }) {
    console.log(message);
  }
});

module.exports = { collection };
