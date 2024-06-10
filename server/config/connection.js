const mongoose = require("mongoose");

// MongoDB connection URI with authentication
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/recipeapp';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

module.exports = mongoose.connection;

// BxjBCMlWzThTqD8k

// mongodb+srv://jnelson4004:BxjBCMlWzThTqD8k@cluster0.kpl1r2r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0