const { ApolloServer }  = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

// const MONGODB = "mongodb+srv://cooper:codes@cluster0.isxsidq.mongodb.net/?retryWrites=true&w=majority";
const MONGODB = "mongodb+srv://jamieohakwe:iamsuperwealthy@cluster0.n7qqjim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
});

mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log("MongoDB Connected");
        return server.listen({port: process.env.PORT || 4000});
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`)
    });