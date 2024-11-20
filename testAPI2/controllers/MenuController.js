import MenuModel from '../models/MenuModel.js';

// Controller untuk mendapatkan semua data dari tabel menu
export const getMenu = async (req, res) => {
  try {
    const menu = await MenuModel.findAll();
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan saat mengambil data menu', error: error.message });
  }
};

export default getMenu;


