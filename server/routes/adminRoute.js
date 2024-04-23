const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController.js');

router.post('/admin-kayit', adminController.registerAdmin);

router.post('/admin-giris', adminController.loginAdmin);

router.post('/admin-giris', adminController.loginAdmin);

router.get('/approve-admin/:email', adminController.approveAdmin);

module.exports = router;
