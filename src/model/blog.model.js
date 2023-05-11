import { Sequelize, DataTypes, UUIDV4 } from "sequelize";
import { connection } from "../config/db.js";

const blogSchema = connection.define("blog", {
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  heading: {
    type: DataTypes.STRING,
  },
  sub_heading: {
    type: DataTypes.STRING,
  },
  detail: {
    type: DataTypes.TEXT,
  },
});

// connection.sync({
//     alter:true
// })
//blogSchema.sync();
export { blogSchema };
