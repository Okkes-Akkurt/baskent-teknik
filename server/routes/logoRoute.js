const express = require('express');
const router = express.Router();
const logoController = require('../controllers/logoController.js');

router.post('/', logoController.uploadLogo);

router.get('/all', logoController.getAllLogos);

router.delete('/:id', logoController.deleteLogo);

module.exports = router;
