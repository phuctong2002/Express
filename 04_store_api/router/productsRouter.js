const express = require('express');
const router = express.Router();



const {addProduct, getAllProducts, deleteProducts, updateProduct, sortProduct} = require('../controller/productController');


router.route('/').post( addProduct).get(getAllProducts).delete(deleteProducts).put(updateProduct);
router.route('/sort').get(sortProduct);

module.exports = router;