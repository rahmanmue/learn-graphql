import { db } from "../config/db.js";
import { DataTypes } from "sequelize";
import { Book } from "./book.js";
import { Member } from "./member.js";

export const Loan = db.define(
  "loan",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Book,
        key: "id",
      },
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Member,
        key: "id",
      },
    },
  },
  {
    timestamps: true,
  }
);
