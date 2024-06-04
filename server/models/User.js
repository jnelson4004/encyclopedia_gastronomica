const { Schema, model} = require('mongoose');

//Sxhema to create a user model

const userSchema = new Schema(
    {
        first: String,
        last: String,
        email: String,
        password: String,
    },
    {
        
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
    virtuals: true,
        },
        id: false,
}
    );

    // Create a a vitual propery othat gets the ammont of comments per user
    userSchema.virtual('fullName')
    // Getter
    .get(function () {
        return `${this.first} ${this.last}`;
    })
    // stter to se the first and last name
    .set(function (v) {
        const first = v.split(' ')[0];
        const last = v.split(' ')[1];
        this.set({ first, last });
    });

      //initialiaze user model
    const User = model('user', userSchema);

    module.exports = User;