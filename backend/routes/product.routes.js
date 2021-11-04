const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validator');
const { product_controller } = require('../controllers');
const router = Router();

router.post(
    '/product/add',
    [
        check('product_id', 'El ID del producto es obligatorio').not().isEmpty(),
        check('product_description', 'La descripción del producto es obligatorio').not().isEmpty(),
        check('product_unit_value', 'El valor unitario del producto es obligatorio').not().isEmpty(),
        check('product_availability', 'El estado del producto es obligatorio').not().isEmpty(),
        validateFields 
    ], product_controller.addProduct);

router.get('/products/list', product_controller.listProducts);
router.put('/product/update/:id', product_controller.updateProduct);
router.delete('/product/delete/:id', product_controller.deleteProduct);

module.exports = router;
