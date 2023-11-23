const path = require('path');

const express = require('express');

const studentController = require('../controllers/studentController');
const authenticationMiddleware = require('../middleware/Authentication')

const router = express.Router();

router.post('/add-student',authenticationMiddleware, studentController.postAddStudent);

router.get('/fetch-all',authenticationMiddleware, studentController.postGetAllStudents)

module.exports = router;
