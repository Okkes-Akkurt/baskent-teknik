const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController.js');

router.post('/admin-kayit', adminController.registerAdmin);

router.post('/admin-giris', adminController.loginAdmin);

module.exports = router;
