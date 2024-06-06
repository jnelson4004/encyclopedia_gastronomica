
module.exports = {
    async getRecipes(req, res) {
        try {
        const recipes = await User.find();
        res.json(recipes);
        } catch (err) {
        res.status(500).json(err)
        }
    },
    async getSingleRecipe(req, res) {
        try {
        const recipe = await User.findOne({ _id: req.params.userId });
    
    if (!recipe) {
            return res.status(404).json({ message: 'No user with that ID' });
        }
    
        res.json(recipe);
        } catch (err) {
        res.status(500).json(err);
        }
    },
      // create a new Recipe
    async createRecipe(req, res) {
        try {
    const dbRecipeData = await recipe.create(req.body);
    res.json(dbRecipeData);
        } catch (err) {
    res.status(500).json(err);
        }
    },
    };