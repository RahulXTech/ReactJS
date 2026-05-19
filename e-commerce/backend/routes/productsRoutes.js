import express from 'express'
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';

const router = express.Router()

router.post("/add", createProduct);
router.get("/", createProduct);
router.put("/update/:id", updateProduct)
router.delete("/delete/:id", deleteProduct)

export default router;








