import  { Sequelize } from 'sequelize';
import config from '../../config/config_env';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: config.db.mysql.host,
  username: config.db.mysql.user,
  password: config.db.mysql.password,
  database: config.db.mysql.dbName,
});

export default sequelize;