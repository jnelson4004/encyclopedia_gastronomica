const { User } = require('../models');

const resolvers = {
Query: {
    users: async () => {
      // Populate the recipes subdocuments when querying for users
    return await User.find({}).populate('recipes').populate({
        path: 'recipes',
        populate: 'recipes'
    });
        }
    }
};

module.exports = resolvers;