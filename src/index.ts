import { testConnection, sequelize } from "./config/database";
import { program } from "./commands/productCommands";

const main = async () => {
  await testConnection();
  await sequelize.sync({ alter: true });

  program.parseAsync(process.argv);
};

main();