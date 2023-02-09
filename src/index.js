import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/Series.js";


async function main() {
  try {
    await sequelize.sync({force: false})
    let port = process.env.PORT || 3000;
    app.listen(port);
    console.log(`Server is lister on port: ${port}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main()

