const express = require('express');
const router = express.Router();
const userHandler = require('./handler');
const verify = require('../middleware/VerifyToken');

/* GET users listing. */
router.post('/register',userHandler.register);
router.get('/',verify,userHandler.getUsers);
//endpoint params
router.get('/user/:id',userHandler.iduser);
//endpoint body
router.post('/user',userHandler.iduser);
//endpoint querystring
router.get('/userqry',verify,userHandler.iduser);
router.put('/update/:id',userHandler.update);
router.delete('/delete/:id',userHandler.delUser);
router.post('/login',userHandler.login);

module.exports = router;
