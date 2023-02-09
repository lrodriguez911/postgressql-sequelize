import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "d3e7a5074jed4b",
  "invduisibxkity",
  "a66cef43646a1c9fef279f09f468af9b80d860feaef9b7dbe62305b24224b895",
  {
    host: "ec2-52-205-98-159.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
       
        rejectUnauthorized: false
      }
    }
  },
);

/* export const sequelize = new Sequelize("project-pragmasoft", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
});
 */

//export const sequelize = new Sequelize('postgres://invduisibxkity:a66cef43646a1c9fef279f09f468af9b80d860feaef9b7dbe62305b24224b895@ec2-52-205-98-159.compute-1.amazonaws.com:5432/d3e7a5074jed4b')
