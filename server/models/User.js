const mongoose = require("mongoose");

//Schema to create a user

const userSchema = new mongoose.Schema(
  {
    first: {
      type: String,
      required: true,
      trim: true,
    },
    last: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 1,
    },
    recipes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe",
      },
    ],
  },
  {
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
);

// Create a a vitual propery othat gets the ammont of comments per user
userSchema
  .virtual("fullName")
  // Getter
  .get(function () {
    return `${this.first} ${this.last}`;
  })
  // stter to se the first and last name
  .set(function (v) {
    const first = v.split(" ")[0];
    const last = v.split(" ")[1];
    this.set({ first, last });
  });

//initialiaze user model
const User = mongoose.model("User", userSchema);

module.exports = User;