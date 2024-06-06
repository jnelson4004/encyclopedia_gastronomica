const typeDefs = `
    type user {
        _id: ID
        firtst: String
        last: String
        email: String
        password: String
        # Add a queryable fiels to retrieve an array of recipes objects
        recipes: [recipe]
    }

    type recipe {
        _id: ID
        title: String
        ingredients: String
        instructions: String
    }

    type Query {
        users: [user]
        recipes: [recipe]
    }
`;

module.exports = typeDefs;