const { Recipe } = require("../models");
const recipeController = {
  async getRecipes(req, res) {
    try {
      const recipes = await Recipe.find();
      res.json(recipes);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleRecipe(req, res) {
    try {
      const recipe = await Recipe.findOne({ _id: req.params.userId });

      if (!recipe) {
        return res.status(404).json({ message: "No recipe with that ID" });
      }

      res.json(recipe);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new Recipe
  async createRecipe(req, res) {
    try {
      const dbRecipeData = await Recipe.create(req.body);
      res.json(dbRecipeData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = recipeController;