const express = require('express');
const router = express.Router();
const logoController = require('../controllers/logoController.js');
const multerConfig = require('../multerConfig.js');
const logoUpload = multerConfig('logo');

// Logo upload route
router.post('/', logoUpload.single('file'), logoController.uploadLogo);

// Get all logos route
router.get('/', logoController.getAllLogos);

module.exports = router;
