const comment = require('../models/comments');

module.exports = {
    async getComments(req, res) {
        try {
            const comments = await comment.find();
            res.json(comments);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getSingleComment(req, res) {
        try {
            const commentData = await comment.findOne({ _id: req.params.commentId });

            if (!commentData) {
                return res.status(404).json({ message: 'No comment with that ID' });
            }
            
            res.json(commentData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createComment(req, res) {
        try {
            const dbCommentData = await comment.create(req.body);
            res.json(dbCommentData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};