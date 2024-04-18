const {
  getData,
  calculateResult,
  setFugitiveLocation,
} = require('../controller/app.controller');

const router = require('express').Router();

router.get('/app-data', getData);
router.post('/result', calculateResult);
router.post('/reset-game', setFugitiveLocation);

module.exports = router;
