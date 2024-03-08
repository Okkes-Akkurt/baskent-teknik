const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Admin kayıt endpoint'i
router.post('/admin-kayit', adminController.registerAdmin);

// Admin giriş endpoint'i
router.post('/admin-giris', adminController.loginAdmin);

module.exports = router;
