const express = require('express');
const router = express.Router();
const UsersController = require('../controller/UsersController');

router.get('/login', UsersController.loginForm)
// router.get('/create', UsersController.create)
// router.post('/create', UsersController.store)
// router.post('/login', UsersController.login)
// router.get('/logout', UsersController.logout)

module.exports = router;