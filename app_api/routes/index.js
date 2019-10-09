import express from 'express';
const router = express.Router();

import * as ctrlUser	from '../controllers/user';
import * as ctrlWidget	from '../controllers/widget';

// User
router.get('/user/:id', ctrlUser.getUser);

// Widget
router.get('/widgets', ctrlWidget.getWidgets);
router.get('/widgets/telephonebook', ctrlWidget.telephonebookSearch);
router.post('/widgets/upload-file', ctrlWidget.uploadFile);
router.post('/widgets/microblog', ctrlWidget.createMicroblog);

module.exports = router;