const express = require('express');
const createAdmin = require('../controllers/adminController.js');

const router = express.Router();


router.route('/').post(createAdmin);


module.exports = router;