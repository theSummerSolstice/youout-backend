const express = require('express');
const router = express.Router();
const gamesController = require('./controllers/games.controller');
const verifyToken = require('../middleware/verifyToken');

router.get('/',
  verifyToken,
  gamesController.getGames,
);

//test router
router.post('/',
  gamesController.create,
);

module.exports = router;
