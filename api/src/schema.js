const { gql } = require('apollo-server')

const typeDefs = gql`
    enum TaskType {
        IT
        BA
        UX
        SEO
    }

    type User {
        id: ID!
        username: String!
        tasks: [Task]!
    }

    type Task {
        id: ID!
        type: TaskType!
        name: String!
        owner: User!
        description: String!
        createdAt: Int!
    }

    input NewTaskInput {
        name: String!
        type: TaskType!
        description: String!
    }

    input TasksInput {
        type: TaskType
    }

        type Query {
        user: User!
        tasks(input: TasksInput): [Task]!
        task(id: ID!): Task!
        }

    type Mutation {
        addTask(input: NewTaskInput!): Task!
}
`;

module.exports = typeDefs
