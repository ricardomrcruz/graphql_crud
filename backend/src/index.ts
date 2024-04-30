import "reflect-metadata";
import db from "./db";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schemaIsBuilt from "./schema";
import env from "./env";

import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";

import { Context } from "./types";

const app = express();
const httpServer = http.createServer(app);

const { SERVER_PORT: port } = env;

schemaIsBuilt.then(async (schema) => {
  await db.initialize();
  const server = new ApolloServer<Context>({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  app.use(
    "/",
    cors<cors.CorsRequest>({
      credentials: true,
      origin: env.CORS_ALLOWED_ORIGINS.split(","),
    }),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => ({ req, res }),
    })
  );
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(`🚀 Server ready at http://localhost:${port}/`);
});





































// import db from "./db";
// import schemaPromise from "./schema";
// import { ApolloServer } from "@apollo/server";
// import env from "./env";
// import { startStandaloneServer } from "@apollo/server/standalone";

// const { SERVER_PORT: port } = env;

// const main = async () => {
//     await db.initialize()
//     console.log("DB initialisée");
//     const schema = await schemaPromise
//     const server = new ApolloServer({ schema })
//     const { url } = await startStandaloneServer(server, { listen: { port } });
// }

// main()
