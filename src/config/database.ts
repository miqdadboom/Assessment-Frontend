import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME || "products_db",
  process.env.DB_USER || "postgres",
  process.env.DB_PASSWORD || "process.env.DB_PASSWORD",
  {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    dialect: "postgres",
    logging: false, 
  }
);

export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
};