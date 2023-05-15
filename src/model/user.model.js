import { DataTypes, UUIDV4 } from "sequelize";
import { connection } from "../config/db.js";

const UserSchema = connection.define("user", {
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,

  },
  password: {
    type: DataTypes.STRING,
  },
});
//UserSchema.sync();
export { UserSchema };
