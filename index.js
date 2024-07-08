const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const app = express();
const port = 3001;

app.use(express.json());

const url = "mongodb+srv://sindhumandadapu24:Bqmjdjl4SnsrDQ5L@cluster0.ca3uuec.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => console.log(err));

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
   
}

function Testing(){
    return 1;
}
Testing();
StartServer();