import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Product extends Model {
  public id!: number;
  public name!: string;
  public price!: number;
  public description?: string; 
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "products",
    sequelize,
    timestamps: true,
  }
);