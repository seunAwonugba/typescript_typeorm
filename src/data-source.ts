import { DataSource } from "typeorm";
import { Product } from "./entities/Product";
import { ProductCategory } from "./entities/ProductCategory";

const AppDataSourceDev = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "temidayo",
    database: "typeorm_database_test",
    entities: [Product, ProductCategory],
    migrations: ["src/migrations"],
});

const AppDataSourceTest = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "temidayo",
    database: " product_dev",
    entities: [Product, ProductCategory],
    logging: true,
});

export default AppDataSourceDev;
