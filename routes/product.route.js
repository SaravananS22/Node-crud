const express=require('express')
const router = express.Router();

const {
    createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteProductById
} = require('../controllers/product.controller.js');

const validateObjectId = require('../middlewares/validateObjectId.middleware.js');

// add a product
router.post('/', createProduct)

// get all product
router.get('/', getProducts)

// get indiviual product
router.get('/:id', validateObjectId ,getProductById)

// update a product
router.put('/:id', validateObjectId ,updateProductById)

// delete a product
router.delete('/:id', validateObjectId ,deleteProductById);

module.exports = router