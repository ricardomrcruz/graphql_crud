import { DataSource } from "typeorm";
import env from "./env";
import Product from "./entities/Product";
import User from "./entities/User";

// export default new DataSource({
//   type: "postgres",
//   host: env.DB_HOST,
//   port: env.DB_PORT,
//   username: env.DB_USER,
//   password: env.DB_PASS,
//   database: env.DB_NAME,
//   entities: [Product, User],
//   synchronize: true,
// });

// FOR TESTING PURPOSES
const db = new DataSource({
  type: "postgres",
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  entities: [Product, User],
  synchronize: true,
  logging: env.NODE_ENV !== "test",
});

export async function clearDB() {
  const entities = db.entityMetadatas;
  const tableNames = entities
    .map((entity) => `"${entity.tableName}"`)
    .join(", ");
  await db.query(`TRUNCATE ${tableNames} RESTART IDENTITY CASCADE;`);
}

export default db;
