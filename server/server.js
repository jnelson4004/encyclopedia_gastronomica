const User = require('./models/User');
const express = require('express');
const db = require('./config/connection');
// Require model
const { Recipe } = require('./models');
const routes = require('./routes');

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
app.get('/all-recipes', async (req, res) => {
  try {
    // Using model in route
    const result = await Recipe.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});