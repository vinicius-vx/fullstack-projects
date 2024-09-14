import { Sequelize } from "sequelize";

const sequelize = new Sequelize("root", "sa", "@Iwannarock", {
  host: "localhost",
  dialect: "mssql",
});

export default sequelize;
