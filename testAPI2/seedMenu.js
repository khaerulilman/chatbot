import MenuModel from './models/MenuModel.js'; // Pastikan path ini sesuai
import db from './config/Database.js'; // Koneksi ke database

(async () => {
  try {
    await db.authenticate();
    console.log('Terhubung ke database MySQL');
    await MenuModel.sync(); // Menjamin model sudah sinkron dengan database

    // Fungsi untuk menambahkan data ke tabel menu
    await MenuModel.create({
      nama_hidangan: 'Nasi Goreng',
      deskripsi: 'Nasi yang digoreng dengan bumbu spesial, dilengkapi dengan ayam, telur, dan sayuran.',
      persediaan: true,
      harga: 25000.00,
      jenis_hidangan: 'Makanan',
      gambar: 'assets/nasi_goreng.jpeg' // Path gambar di folder assets
    });
    console.log('Data Nasi Goreng berhasil ditambahkan');
  } catch (error) {
    console.error('Gagal menambahkan data:', error.message);
  } finally {
    process.exit(); // Tutup proses setelah selesai
  }
})();
