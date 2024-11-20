import express from "express";
import getMenu from "../controllers/MenuController.js"; // Pastikan impor dengan { }
import createPesanan from "../controllers/PesananController.js";

const router = express.Router();

router.get('/menu', getMenu);
router.post('/pesanan',createPesanan);

export default router;
