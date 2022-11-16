import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("project-pragmasoft", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
});
