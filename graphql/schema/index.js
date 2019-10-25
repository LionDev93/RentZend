const buildSchema = require("graphql").buildSchema;

const graphQLSchema = buildSchema(`
    type User {
        _id: ID!
        name: String!
        email: String!
        phoneNumber: String!
        address: String!
        zipCode: String!
        token: String!
    }
    input UserInput {
        name: String!
        email: String!
        phoneNumber: String!
        address: String!
        zipCode: String!
    }
    type RootQuery {
        login(email: String!, password: String!): User
        verifyToken(token: String!): User
    }
    type RootMutation {
        createUser(userInput: UserInput): User
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);

module.exports = graphQLSchema;
