const express = require('express');
const { takeExam, getResults, getMaterials } = require('../controllers/studentController');
const router = express.Router();

router.post('/take-exam', takeExam);
router.get('/results', getResults);
router.get('/materials', getMaterials);

module.exports = router;
