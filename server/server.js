const express = require('express');
const db = require('./config/connection');
// Require model
const { Recipe, User, Comments } = require('./models');

const routes = require('./routes');
const userRoutes = require('./controllers/user.Controller');
const recipeRoutes = require('./controllers/recipe.Controller');
const commentsRoutes = require('./controllers/comments.Controller');

const PORT = process.env.PORT || 10000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.post('/signup', async function (req, res) {
 console.log("hi");
  var first = "eddie";
 var last = "montoya";
var email = "dfafd@gmail.com";
var password = "123";
  await User.create([{first: 'eddie', last: 'montoya', email: 'eddie', password: 'montoya'}])
  
});

// app.use(express.static(path.join(__dirname, 'users')));

app.get('/users', userRoutes.getUsers);
app.get('/users/:userId', userRoutes.getSingleUser);
app.post('/users', userRoutes.createUser);

app.get('/recipes', recipeRoutes.getRecipes);
app.get('/recipes/:recipeId', recipeRoutes.getSingleRecipe);
app.post('/recipes', recipeRoutes.createRecipe);

app.get('/comments', commentsRoutes.getComments);
app.get('/comments/:commentId', commentsRoutes.getSingleComment);
app.post('/comments', commentsRoutes.createComment);


app.get('/all-recipes', async (req, res) => {
  try {
    // Using model in route
    const result = await Recipe.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// app.get("/all-recipes", async (req, res) => {
//   try {
//     // Using model in route
//     const result = await Recipe.find({});
//     res.status(200).json(result);
//   } catch (err) {
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});