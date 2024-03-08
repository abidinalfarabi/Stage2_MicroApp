import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { blog } from "./entity/blog";
import { Articel } from "./entity/Articel";
import { Partai } from "./entity/partai";
import { Paslon } from "./entity/Paslon";
import { Vouter } from "./entity/Vouter";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123",
  database: "MicroApp_Be",
  synchronize: true,
  logging: false,
  entities: [User, blog, Articel, Partai, Paslon, Vouter],
  migrations: [],
  subscribers: [],
});
