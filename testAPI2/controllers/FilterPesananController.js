import sequelize from '../config/Database.js';

export const copyDataToFilterPesanan = async () => {
  try {
    await sequelize.query(`
      INSERT INTO filter_pesanan (nama_pesanan, quantity, deskripsi_tambahan, nama_pelanggan, no_meja, waktu_pemesanan, status_pembayaran)
      SELECT 
        nama_pesanan, 
        quantity, 
        deskripsi_tambahan, 
        nama_pelanggan, 
        no_meja, 
        waktu_pemesanan, 
        'Belum Dibayar' AS status_pembayaran
      FROM pesanan
      ORDER BY waktu_pemesanan ASC
    `);
    console.log('Data berhasil dicopy ke filter_pesanan!');
  } catch (error) {
    console.error('Gagal menyalin data:', error);
  }
};

copyDataToFilterPesanan();
