const User = require('./models/User');
const express = require('express');
const db = require('./config/connection');
// Require model
const { Recipe } = require('./models');

const routes = require('./routes');
const userRoutes = require('./controllers/user.Controller');
const recipeRoutes = require('./controllers/recipe.Controller');
const commentRoutes = require('./controllers/comments.controller');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use(routes);
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

app.get('/comments', commentRoutes.getComments);
app.get('/comments/:commentId', commentRoutes.getSingleComment);
app.post('/comments', commentRoutes.createComment);


app.get('/all-recipes', async (req, res) => {
  try {
    // Using model in route
    const result = await Recipe.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// app.post('/', async (req, res) => {
//   try {
//   const user = await User.findOne({
//     email,
//     password
//   });

//   if (!user) {
//         return res.status(404).json({ message: 'Incorrect Credentials' });
//     }

//     res.json(user);
//     } catch (err) {
//     res.status(500).json(err);
//     }
// });

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

// star69