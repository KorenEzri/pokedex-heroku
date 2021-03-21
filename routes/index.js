const { Router } = require("express");
const pokemon = require("./pokemon");
const type = require("./type");
const mongoose = require("mongoose");
const { collection } = require("./collection");
const url =
  "mongodb+srv://korenAtDEVS:123456Tamutu@cluster0.koozw.mongodb.net/Pokedex?retryWrites=true&w=majority";
const api = Router();
api.use("/pokemon", pokemon);
api.use("/type", type);
api.use("/collection", collection);

const connectMongo = async () => {
  console.log("Connecting to MongoDB");
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    });
    console.log("Connected to MongoDB");
  } catch ({ message }) {
    console.log(message);
  }
};

connectMongo();
module.exports = api;
