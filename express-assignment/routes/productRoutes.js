const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Creating the routes

router.get('/', productController.getAllProducts);
router.get('/:prod_id', productController.getProductByID);
router.post('/', productController.createNewProduct);
router.put('/:prod_id', productController.updateProduct);
router.delete('/:prod_id', productController.deleteProduct);

module.exports = router;