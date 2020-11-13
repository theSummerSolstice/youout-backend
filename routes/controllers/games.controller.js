const gameService = require('../../services/game.service');

exports.getGames = async (req, res, next) => {
  const { lat, lng } = req.body;
  console.log(lat, lng);
  try {
    const games = await gameService.findByLocation({ lat, lng });
    res.status(200).json({ result: 'ok', data: games });
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  const body = req.body;
  try {
    const games = await gameService.create(body);
    res.status(200).json({ result: 'ok', data: games });
  } catch (err) {
    next(err);
  }
};
