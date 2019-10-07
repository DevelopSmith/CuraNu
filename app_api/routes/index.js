var express = require('express');
var router = express.Router();

var ctrlUser = require('../controllers/user');
var ctrlWidget = require('../controllers/widget');

// User
router.get('/user/:id', ctrlUser.getUser);

// Widget
router.get('/widgets', ctrlWidget.getWidgets);

module.exports = router;