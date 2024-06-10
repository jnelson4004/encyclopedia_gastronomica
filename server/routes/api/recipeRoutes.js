const router = require("express").Router();
const { createRecipe, getRecipes, getSingleRecipe } = require("../../controllers/recipe.Controller");

// get all recipes
// /api/recipes
router.route("/").get(getRecipes);

// get one recipe
// /api/recipes/:recipeId
router.route("/:recipeId").get(getSingleRecipe);

// create a recipe
// /api/recipes/newRecipe
router.route("/newRecipe").post(createRecipe);

module.exports = router;