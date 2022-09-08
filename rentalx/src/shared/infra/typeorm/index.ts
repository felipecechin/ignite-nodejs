import { DataSource } from "typeorm";

import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "database_ignite",
  port: 5432,
  username: "docker",
  password: "1234",
  database: "rentx",
  entities: [Category, Specification, User, Car],
  migrations: ["src/shared/infra/typeorm/migrations/*.ts"]
});

export const createConnection = () => {
  AppDataSource.initialize()
    .then(async () => {
      console.log("Initializing the database...");
    })
    .catch((err) => console.log(err));
};
