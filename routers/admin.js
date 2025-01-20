

const express =require('express');
const adminController = require('../controllers/adminpage');

const router = express.Router();
// /admin/add-product =>GET
router.get('/add-product',adminController.getproduct);

// /admin/add-product =>POST
router.post('/add-product',adminController.postProduct)

module.exports = router;