import path from "path";
import "./src/utils/env.js";
import type { Knex } from "knex";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const DIRNAME = dirname(fileURLToPath(import.meta.url));

const baseConfig: Knex.Config = {
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
   },
   migrations: {
      directory: [
         path.join(DIRNAME, "knex/migration/"),
      ],
      loadExtensions: [".ts"],
   },
   seeds: {
      directory: [path.join(DIRNAME, "knex/seeds/")],
      loadExtensions: ['.ts'],
   }
};

const config: Record<string, Knex.Config> = {
   development: baseConfig,
   production: baseConfig,
};

export default config;
