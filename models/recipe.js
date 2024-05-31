//Require schema and model from mongoose
const mongoose = require('mongoose');

// Construct a new instance of the schema class
const recipeSchema = new mongoose.Schema({
    // Configure individual properties using Schema Types
    title: { type: String, required: true },
    ingredients: { type: String, required: true },
    instructions: { type: String, required: true },
    lastAccessed: { type: Date, default: Date.now},
});

// Using mongoose.model() to compile a model based on the schema 'recipeSchema'
const Recipe = mongoose.model('Recipe', recipeSchema);

const handleError = (err) => console.error(err);

// Create a new instance of the model, a recipe document
Recipe
.create({
    title: 'Pizza',
    ingredients: 'Pizza dough, tomato sauce, cheese',
    instructions: 'Mix ingredients, bake',
})
.then(result => console.log('Created a new recipe', result))
.catch(err => handleError(err));

Recipe
.create({
    title: 'Peanut Butter and Jelly',
    ingredients: 'Bread, Peanut Butter, Jelly',
    instructions: 'Spread Peanut Butter and Jelly on two slices of bread, then combine',
})
.then(result => console.log('Created a new recipe', result))
.catch(err => handleError(err));

module.exports = Recipe;

