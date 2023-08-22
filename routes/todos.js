const express = require('express');
const router = express.Router();
const TodosController = require('../controller/TodosController');

router.get('/', TodosController.index)
router.get('/create', TodosController.create)
router.post('/create', TodosController.store)
router.get('/destroy/:id', TodosController.destroy)
router.get('/edit/:id', TodosController.edit)
router.post('/update', TodosController.update)

module.exports = router;