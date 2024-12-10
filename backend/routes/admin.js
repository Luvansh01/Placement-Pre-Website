const express = require('express');
const { addExam, getStudents, addMaterial } = require('../controllers/adminController');
const router = express.Router();

router.post('/add-exam', addExam);
router.get('/students', getStudents);
router.post('/add-material', addMaterial);

module.exports = router;
