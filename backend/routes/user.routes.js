const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validator');
const { user_controller } = require('../controllers');
const router = Router();

router.post(
    '/user/add',
    [
        check('user_name', 'El nombre de usuario es obligatorio').not().isEmpty(),
        check('user_email', 'El correo ingresado no es válido').isEmail(),
        check('user_password', 'La contraseña debe tener mínimo 6 caracteres').isLength({min:6}),
        validateFields 
    ], user_controller.addUser);

router.get('/users/list', user_controller.listUsers);
router.put('/user/update/:id', user_controller.updateUser);
router.delete('/user/delete/:id', user_controller.deleteUser);

module.exports = router;
