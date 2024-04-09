const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController.js');

router.post('/', photoController.uploadPhoto);
router.get('/all', photoController.getAllPhotos);
router.delete('/:id', photoController.deletePhoto);

module.exports = router;
