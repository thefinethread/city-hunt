const { getData, calculateResult } = require('../controller/app.controller');

const router = require('express').Router();

router.get('/app-data', getData);
router.post('/result', calculateResult);

module.exports = router;
