const express = require('express');
const router = express.Router();
const loginRouter = require('./login');
const gamesRouter = require('./games');

router.use('/login', loginRouter);
router.use('/games', gamesRouter);

module.exports = router;
