const express = require('express');
const router = express.Router();
const loginRouter = require('./login');
const gamesRouter = require('./games');
const userRouter = require('./user');

router.use('/login', loginRouter);
router.use('/games', gamesRouter);
router.use('/user', userRouter);

module.exports = router;
