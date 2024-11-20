import PesananModel from '../models/PesananModel.js';
import MenuModel from '../models/MenuModel.js'; // Pastikan MenuModel diimpor di sini

export const createPesanan = async (req, res) => {
  try {
    const { nama_pesanan, quantity, deskripsi_tambahan, nama_pelanggan, no_meja } = req.body;

    // Validasi input
    if (!nama_pesanan || !nama_pelanggan || !no_meja || !quantity) {
        return res.status(400).json({ message: 'Harap lengkapi semua data yang diperlukan' });
      }
    // Buat pesanan baru
    const pesanan = await PesananModel.create({
      nama_pesanan, 
      quantity,
      deskripsi_tambahan,
      nama_pelanggan,
      no_meja
    });

    res.status(201).json({ message: 'Pesanan berhasil dibuat', pesanan });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan saat membuat pesanan', error: error.message });
  }
};


// export const createPesanan = async (req, res) => {
//   try {
//     const { nama_pesanan, quantity, deskripsi_tambahan } = req.body;

//     // Validasi input
//     if (!nama_pesanan || !quantity) {
//         return res.status(400).json({ message: 'Harap lengkapi semua data yang diperlukan' });
//       }
//     // Buat pesanan baru
//     const pesanan = await PesananModel.create({
//       nama_pesanan, 
//       quantity,
//       deskripsi_tambahan
//     });

//     res.status(201).json({ message: 'Pesanan berhasil dibuat', pesanan });
//   } catch (error) {
//     res.status(500).json({ message: 'Terjadi kesalahan saat membuat pesanan', error: error.message });
//   }
// };


export default createPesanan;