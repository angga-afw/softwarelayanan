const express = require('express');
const router = express.Router();
const userHandler = require('./handler');

/* GET users listing. */
router.post('/register',userHandler.register);
router.get('/',userHandler.getUsers);
//endpoint params
router.get('/user/:id',userHandler.iduser);
//endpoint body
router.post('/user',userHandler.iduser);
//endpoint querystring
router.get('/userqry',userHandler.iduser);
router.put('/update/:id',userHandler.update);

module.exports = router;
