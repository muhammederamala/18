const path = require('path');

const express = require('express');

const adminController = require('../controllers/adminController');

const router = express.Router();

router.post('/signup', adminController.postSignup);

router.post('/login',adminController.postLogin)

module.exports = router;
