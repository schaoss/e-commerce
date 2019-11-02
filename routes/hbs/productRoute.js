const express = require('express')
const router = express.Router()
const passport = require('passport')

const { ensureAuthenticated, isAuthUser, getUser } = require('../../config/auth')
const productController = require('../../controllers/hbs/productController')

router.get('/products', productController.getProducts)
router.post('/products/:product_id/unlike', productController.unlikeProduct)

module.exports = router