const { Comment } = require('../models');

module.exports = {
    async getComments(req, res) {
        try {
            const comments = await Comment.find();
            res.json(comments);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getSingleComment(req, res) {
        try {
            const commentData = await Comment.findOne({ _id: req.params.commentId });

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
            const dbCommentData = await Comment.create(req.body);
            res.json(dbCommentData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};