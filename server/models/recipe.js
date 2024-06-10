//Require schema and model from mongoose
const mongoose = require("mongoose");
// const { Schema } = mongoose;

// Construct a new instance of the schema
const recipeSchema = new mongoose.Schema(
  {
    // Configure individual properties using Schema Types
    title: {
      type: String,
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    // Associate the recipe with a user
    users: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
);

// Using mongoose.model() to compile a model based on the schema 'recipeSchema'
const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
