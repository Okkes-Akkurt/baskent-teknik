const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController.js');
const multerConfig = require('../multerConfig.js');
const photoUpload = multerConfig('photo');

// Photo upload route
router.post('/', photoUpload.single('file'), photoController.uploadPhoto);

// Get all photos route
router.get('/all', photoController.getAllPhotos);


module.exports = router;