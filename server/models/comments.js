const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe',
        required: true,
    },
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});

const Comments = mongoose.model('Comment', commentSchema);

const handleError = (err) => console.error(err);

Comments
.create({
    text: 'This recipe is great!',
    user: '',
    recipe: '',
})
.then(result => console.log('Created a new comment', result))
.catch(err => handleError(err));

module.exports = Comments;