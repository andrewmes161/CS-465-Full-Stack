var express = require('express');
var router = express.Router();
const controller = require('../controllers/travel');

/* GET home page. */
router.get('/', controller.travel);
// router.get('/', controller.travelList); Module 5 input

module.exports = router;
