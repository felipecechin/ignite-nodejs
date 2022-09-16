import { DataSource } from "typeorm";

import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { CarImage } from "@modules/cars/infra/typeorm/entities/CarImage";
import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.NODE_ENV === "test" ? "localhost" : "database_ignite",
  port: 5432,
  username: "docker",
  password: "1234",
  database: process.env.NODE_ENV === "test" ? "rentx_test" : "rentx",
  entities: [Category, Specification, User, Car, CarImage, Rental],
  migrations: ["src/shared/infra/typeorm/migrations/*.ts"],
});

export const createConnection = () => {
  return AppDataSource.initialize();
};
