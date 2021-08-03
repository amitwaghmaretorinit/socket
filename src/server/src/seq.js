import Sequelize from "sequelize";
import dotenv from "dotenv";
import UserModel from "./models/UserModel/index.js";

dotenv.config();

const dbConfig = {
  HOST: process.env.HOST || "localhost",
  USER: process.env.DB_USER || "root",
  PASSWORD: process.env.PASSWORD || "",
  DB: process.env.DB || "chat_app",
  dialect: "mysql",
  pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
};

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = UserModel(sequelize, Sequelize);

export default db;
