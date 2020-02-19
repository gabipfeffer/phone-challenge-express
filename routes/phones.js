const express = require('express');
const router = express.Router();

const phoneController = require('../controllers/phones');

router.get('/', phoneController.getAll);

router.get('/:idPhone', phoneController.getById);

router.delete('/:idPhone', phoneController.deletePhone);

router.post('/create', phoneController.createPhone);

module.exports = router;
