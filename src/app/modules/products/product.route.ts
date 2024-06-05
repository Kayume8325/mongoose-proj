import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/', ProductControllers.createProduct);
router.get('/:productId', ProductControllers.getSingleProduct);
router.get('/', ProductControllers.getAllProducts);
router.put('/:productId', ProductControllers.updateProductById);
router.delete('/:productId', ProductControllers.deleteProductById);

export const ProductRoutes = router;
