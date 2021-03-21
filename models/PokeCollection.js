const mongoose = require("mongoose");
const pokemonSchema = new mongoose.Schema({
  pokemonId: { type: String, unique: true },
  pokemonData: {
    name: String,
    height: String,
    weight: String,
    id: String,
    pictures: {
      front: String,
      back: String,
    },
  },
});

pokemonSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
