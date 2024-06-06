const Recipe = require("../models/recipe")

module.exports = {
    async getRecipes(req, res) {
        try {
            const users = await Recipe.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async getSingleRecipe(req, res) {
        try {
            const user = await Recipe.findOne({ _id: req.params.recipeId });

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createRecipe(req, res) {
        try {
            const dbUserData = await Recipe.create(req.body);
            res.json(dbUserData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};