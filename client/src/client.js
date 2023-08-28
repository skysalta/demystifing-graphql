import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import gql from 'graphql-tag'
import { setContext } from 'apollo-link-context'
import { ApolloLink } from 'apollo-link'


const typeDefs = gql`
    extend type Task {
        assignedBy: String
    }
`
const resolvers = {
    Task: {
        assignedBy() {
            return "Burak"
        }
    }
}
// const link = new HttpLink({uri: 'http://localhost:4000'})
const cache = new InMemoryCache()
const http = new HttpLink({uri: 'http://localhost:4000/'})

const delay = setContext(
    request => 
        new Promise((success, fail) => {
            setTimeout( () => {
                success()
            }, 800)
        })
)

const link = ApolloLink.from([
    delay,
    http
])

const client = new ApolloClient({
    link,
    cache,
    typeDefs,
    resolvers
});

export default client;