const {Router} =require('express');
const {check}= require('express-validator');
const { crearUsuario, loginUsuario, renewToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const router=Router();

//Crear un nuevo usuario

router.post('/new',[
    check('name','El nombre es obligatorio').notEmpty(),
    check('email','El email es obligatorio').isEmail(),
    check('password','El password es obligatorio').isLength({min:6}),
    validarCampos
],crearUsuario);
//Login de usuario
router.post('/',[
    check('email','El email es obligatorio').isEmail(),
    check('password','El password es obligatorio').isLength({min:6})
],loginUsuario);
//validar token
router.get('/renew',renewToken);


module.exports=router;