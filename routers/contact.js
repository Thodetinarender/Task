const express = require('express');
const contactController = require('./controllers/contactus');

const router = express.Router();

// Handling GET requests for the contact page
router.get('/contactus', contactController.getcontact);

// Handling POST requests when the form is submitted
router.post('/contact-us', contactController.postcontact);

// Handling GET requests for the success page
router.get('/success', contactController.successcontacts);

module.exports = router;
