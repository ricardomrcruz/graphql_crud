import { DataSource } from "typeorm";
import env from "./env"
import Product from "./entities/Product"
import User from "./entities/User"

export default new DataSource({
    type: "postgres",
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    entities: [Product, User],
    synchronize: true,
})