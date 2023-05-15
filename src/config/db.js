
import { Sequelize, DataTypes, UUIDV4 } from "sequelize";
import "dotenv/config.js";
const connection = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
);

connection
  .authenticate()
  .then(() => {
    return 
  })
  .catch((err) => {
    console.log(err);
  });

export  {connection}

