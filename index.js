import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schemas/typeDefs.js";
import { resolvers } from "./resolvers/index.js";
import { db } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const initializeDB = async () => {
  try {
    await db.sync({ alter: true });
    console.log("db created");
  } catch (error) {
    console.error("error", error);
  }
};

const startServer = async () => {
  // type Book Schema
  // type Query Query Schema nya
  // resolvers Fungsi untuk menangani query

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  try {
    const { url } = await startStandaloneServer(server, {
      listen: { port: process.env.PORT || 4000 },
    });
    console.log("🚀  Server ready at:", url);
  } catch (error) {
    console.error("Error starting server", error);
  }
};

const initializationApp = async () => {
  await db.authenticate();
  await startServer();
};

initializationApp();
