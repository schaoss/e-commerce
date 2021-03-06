/********************************************************************
* Cart - 將商品加入購物車
* GET http://localhost:3000/api/carts
********************************************************************/

/**
 * @swagger
 * /api/carts:
 *   get:
 *     tags:
 *      - Cart
 *     description: Cart - 取得購物車資訊
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 取得購物車資訊成功
 */

/********************************************************************
* Cart - 將商品加入購物車
* POST http://localhost:3000/api/carts
********************************************************************/

/**
 * @swagger
 * /api/carts:
 *   post:
 *     tags:
 *      - Cart
 *     description: Cart - 將商品加入購物車
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: productId
 *         description: Product 的 id
 *         in: formData
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: 將商品加入購物車 成功
 */

/********************************************************************
* Cart - 增加購物車中的商品數量
* POST http://localhost:3000/api/carts/:cartItem_id/add
********************************************************************/

/**
 * @swagger
 * /api/carts/{cartItem_id}/add:
 *   post:
 *     tags:
 *      - Cart
 *     description: Cart - 增加購物車中的商品數量
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: cartItem_id
 *         type: integer
 *         required: true
 *         description: cartItem_id
 *     responses:
 *       200:
 *         description: 增加購物車中的商品數量成功
 */

/********************************************************************
* Cart - 減少購物車中的商品數量
* POST http://localhost:3000/api/carts/:cartItem_id/sub
********************************************************************/

/**
 * @swagger
 * /api/carts/{cartItem_id}/sub:
 *   post:
 *     tags:
 *      - Cart
 *     description: Cart - 減少購物車中的商品數量
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: cartItem_id
 *         type: integer
 *         required: true
 *         description: cartItem_id
 *     responses:
 *       200:
 *         description: 減少購物車中的商品數量成功
 */

/********************************************************************
* Cart - 移除購物車中的商品
* POST http://localhost:3000/api/carts/:cartItem_id/delete
********************************************************************/

/**
 * @swagger
 * /api/carts/{cartItem_id}/delete:
 *   post:
 *     tags:
 *      - Cart
 *     description: Cart - 移除購物車中的商品
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: cartItem_id
 *         type: integer
 *         required: true
 *         description: cartItem_id
 *     responses:
 *       200:
 *         description: 移除購物車中的商品成功
 */

/********************************************************************
* Cart - 將 coupon 加入購物車
* POST http://localhost:3000/api/carts/addCoupon
********************************************************************/

/**
 * @swagger
 * /api/carts/addCoupon:
 *   post:
 *     tags:
 *      - Cart
 *     description: Cart - 將 coupon 加入購物車
 *     produces:
 *       - application/json
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: coupon_code
 *         description: Coupon code (sn)
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: 將 coupon 加入購物車成功
 */

/********************************************************************
* Cart - 將 coupon 加入購物車
* POST http://localhost:3000/api/carts/removeCoupon
********************************************************************/

/**
 * @swagger
 * /api/carts/removeCoupon:
 *   post:
 *     tags:
 *      - Cart
 *     description: Cart - 將 coupon 移出購物車
 *     produces:
 *       - application/json
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: 將 coupon 移出購物車成功
 */