const express = require('express');
const router = express.Router();
const gamesController = require('./controllers/games.controller');
const verifyToken = require('../middleware/verifyToken');

router.get('/',
  verifyToken,
  gamesController.sendGames,
);

//test router
router.post('/',
  verifyToken,
  gamesController.create,
);

module.exports = router;
