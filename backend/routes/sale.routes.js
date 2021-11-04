const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validator');
const { sale_controller } = require('../controllers');
const router = Router();

router.post(
    '/sale/add',
    [
        check('sale_id', 'El ID de la venta es obligatorio').not().isEmpty(),
        check('sale_total_value', 'El valor total de la venta es obligatorio').not().isEmpty(),
        check('product_quantity', 'La cantidad de productos de la venta es obligatorio').not().isEmpty(),
        //check('sale_date', 'El formato debe ser fecha').isDate(),
        check('client_id', 'El ID del cliente es obligatorio').not().isEmpty(),
        check('client_name', 'El nombre del cliente es obligatorio').not().isEmpty(),
        check('seller_name', 'El nombre del vendedor es obligatorio').not().isEmpty(),
        validateFields 
    ], sale_controller.addSale);

router.get('/sales/list', sale_controller.listSales);
router.put('/sale/update/:id', sale_controller.updateSale);
router.delete('/sale/delete/:id', sale_controller.deleteSale);

module.exports = router;
