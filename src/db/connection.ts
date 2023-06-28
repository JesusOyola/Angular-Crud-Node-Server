import { Sequelize } from "sequelize";


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('railway', 'root', 'XvLdkdSpLSTSN0UaNtuC', {
    host: 'containers-us-west-35.railway.app',
    dialect: 'mysql',
    port:6942,
    logging: false
  });

  export default sequelize;