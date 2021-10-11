const express = require('express');
const router = express.Router();
var destnsCtrl = require('../controllers/destinations');

router.post('/flights/:id/destinations', destnsCtrl.create);

module.exports = router;