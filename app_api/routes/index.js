import express from 'express';
const router = express.Router();

import * as ctrlUser	from '../controllers/user';
import * as ctrlWidget	from '../controllers/widget';

// User
router.get('/user/:id', ctrlUser.getUser);

// Widget
router.get('/widgets', ctrlWidget.getWidgets);

module.exports = router;