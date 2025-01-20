const express = require('express');
const adminController = require('./controllers/adminpage');

const router = express.Router();

// /admin/add-product => GET request - Show the product page
router.get('/add-product', adminController.getProduct);

// /admin/add-product => POST request - Handle form submission
router.post('/add-product', adminController.postProduct);

module.exports = router;
