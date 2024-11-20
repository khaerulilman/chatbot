import { Sequelize } from 'sequelize';

// Create a new Sequelize instance to connect to the MySQL database
const db = new Sequelize('ai_pemesanan', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Optional: disables SQL query logging in the console
});

export default db;
