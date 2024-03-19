import "reflect-metadata";
import db from "./db";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schemaIsBuilt from "./schema";
import env from "./env";

const { SERVER_PORT: port } = env;

schemaIsBuilt.then(async (schema) => {
  await db.initialize();
  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server, { listen: { port } });
  console.log(`server ready on ${url}`);
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

