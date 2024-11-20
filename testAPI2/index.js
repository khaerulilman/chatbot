import express from 'express';
import db from './config/Database.js';
import router from './routes/index.js';
import Users from './models/MenuModel.js';
import PesananModel from './models/PesananModel.js';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(router);

(async () => {
  try {
    await db.authenticate();
    console.log('Terhubung ke database MySQL');
    await Users.sync({ alter: true });
    await PesananModel.sync({ alter: true }); // Menyinkronkan model Pesanan
    app.listen(PORT, () => console.log(`Server di http://localhost:${PORT}`));
  } catch (error) {
    console.error('Koneksi gagal:', error.message);
    process.exit(1);
  }
})();

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Terjadi kesalahan pada server', error: err.message });
});
