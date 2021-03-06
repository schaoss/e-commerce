/********************************************************************
* Admin - 取得所有 Order
* GET http://localhost:3000/api/admin/orders
********************************************************************/

/**
 * @swagger
 * /api/admin/orders:
 *   get:
 *     tags:
 *      - Admin
 *     description: Admin - 取得所有 Order
 *     produces:
 *       - application/json
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: 取得所有 Order 成功
 */

/********************************************************************
* Admin - 取得特定 Order
* GET http://localhost:3000/api/admin/orders/:order_id
********************************************************************/

/**
 * @swagger
 * /api/admin/orders/{order_id}:
 *   get:
 *     tags:
 *      - Admin
 *     description: Admin - 取得特定 Order
 *     produces:
 *       - application/json
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: order_id
 *         type: integer
 *         required: true
 *         description: order_id
 *     responses:
 *       200:
 *         description: 取得特定 Order 成功
 */

/********************************************************************
* Admin - Order 取消
* PUT http://localhost:3000/api/admin/orders/:order_id/cancel
********************************************************************/

/**
 * @swagger
 * /api/admin/orders/{order_id}/cancel:
 *   put:
 *     tags:
 *      - Admin
 *     description: Admin - Order 取消
 *     produces:
 *       - application/json
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: order_id
 *         type: integer
 *         required: true
 *         description: order_id
 *     responses:
 *       200:
 *         description: Order 取消成功
 */

/********************************************************************
* Admin - Order 恢復
* PUT http://localhost:3000/api/admin/orders/:order_id/resume
********************************************************************/

/**
 * @swagger
 * /api/admin/orders/{order_id}/resume:
 *   put:
 *     tags:
 *      - Admin
 *     description: Admin - Order 恢復
 *     produces:
 *       - application/json
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: order_id
 *         type: integer
 *         required: true
 *         description: order_id
 *     responses:
 *       200:
 *         description: Order 恢復成功
 */

/********************************************************************
* Admin - Order 出貨
* PUT http://localhost:3000/api/admin/orders/:order_id/shipped
********************************************************************/

/**
 * @swagger
 * /api/admin/orders/{order_id}/shipped:
 *   put:
 *     tags:
 *      - Admin
 *     description: Admin - Order 出貨
 *     produces:
 *       - application/json
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: order_id
 *         type: integer
 *         required: true
 *         description: order_id
 *     responses:
 *       200:
 *         description: Order 出貨成功
 */

/********************************************************************
* Admin - Order 取消出貨
* PUT http://localhost:3000/api/admin/orders/:order_id/unshipped
********************************************************************/

/**
 * @swagger
 * /api/admin/orders/{order_id}/unshipped:
 *   put:
 *     tags:
 *      - Admin
 *     description: Admin - Order 取消出貨
 *     produces:
 *       - application/json
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: order_id
 *         type: integer
 *         required: true
 *         description: order_id
 *     responses:
 *       200:
 *         description: Order 取消出貨成功
 */

/********************************************************************
* Admin - 取得所有 Discount
* GET http://localhost:3000/api/admin/orders/discounts
********************************************************************/

/**
 * @swagger
 * /api/admin/orders/discounts:
 *   get:
 *     tags:
 *      - Admin
 *     description: Admin - 取得所有 Discounts
 *     produces:
 *       - application/json
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: 取得所有 Discounts 成功
 */

/********************************************************************
* Admin - 取得特定 Discount
* GET http://localhost:3000/api/admin/orders/discounts/:discount_id
********************************************************************/

/**
 * @swagger
 * /api/admin/orders/discounts/{discount_id}:
 *   get:
 *     tags:
 *      - Admin
 *     description: Admin - 取得特定 Discount
 *     produces:
 *       - application/json
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: discount_id
 *         type: integer
 *         required: true
 *         description: discount_id
 *     responses:
 *       200:
 *         description: 取得特定 Discount 成功
 */

/********************************************************************
* Admin - 建立 Discount
* POST http://localhost:3000/api/admin/orders/discounts
********************************************************************/

/**
 * @swagger
 * /api/admin/orders/discounts:
 *   post:
 *     tags:
 *      - Admin
 *     description: Admin - 建立 Discount
 *     produces:
 *       - application/json
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: name
 *         type: string
 *         in: formData
 *         required: true
 *         description: Name of the discount
 *       - name: requireAmount
 *         type: integer
 *         in: formData
 *         required: true
 *         description: 折扣指定額度（需大於 0）
 *       - name: discountAmount
 *         type: integer
 *         in: formData
 *         required: true
 *         description: 折扣數量（需大於 0 且小於 100）
 *     responses:
 *       200:
 *         description: 建立 Discount 成功
 */

/********************************************************************
* Admin - 修改 Discount
* PUT http://localhost:3000/api/admin/orders/discounts/:discount_id/edit
********************************************************************/

/**
 * @swagger
 * /api/admin/orders/discounts/{discount_id}/edit:
 *   put:
 *     tags:
 *      - Admin
 *     description: Admin - 修改 Discount
 *     produces:
 *       - application/json
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: discount_id
 *         type: integer
 *         required: true
 *         description: discount_id
 *       - name: name
 *         type: string
 *         in: formData
 *         required: true
 *         description: Name of the discount
 *       - name: requireAmount
 *         type: integer
 *         in: formData
 *         required: true
 *         description: 折扣指定額度（需大於 0）
 *       - name: discountAmount
 *         type: integer
 *         in: formData
 *         required: true
 *         description: 折扣數量（需大於 0 且小於 100）
 *     responses:
 *       200:
 *         description: 修改 Discount 成功
 */

/********************************************************************
* Admin - 取消 Discount
* PUT http://localhost:3000/api/admin/orders/discounts/:discount_id/cancel
********************************************************************/

/**
 * @swagger
 * /api/admin/orders/discounts/{discount_id}/cancel:
 *   put:
 *     tags:
 *      - Admin
 *     description: Admin - 取消 Discount
 *     produces:
 *       - application/json
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: discount_id
 *         type: integer
 *         required: true
 *         description: discount_id
 *     responses:
 *       200:
 *         description: 取消 Discount
 */