import { DataSource } from "typeorm";

import { Category } from "../modules/cars/entities/Category";
import { Specification } from "../modules/cars/entities/Specification";

export const AppDataSource = new DataSource({
  type: "postgres",
  // ao rodar migration:run no terminal, host precisa ser localhost
  host: "database_ignite",
  port: 5432,
  username: "docker",
  password: "1234",
  database: "rentx",
  entities: [Category, Specification],
  migrations: ["src/database/migrations/*.ts"],
});

AppDataSource.initialize()
  .then(async () => {
    console.log("Initializing the database...");
  })
  .catch((err) => console.log(err));
