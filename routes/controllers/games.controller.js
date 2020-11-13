const gameService = require('../../services/game.service');

const QUERY_TYPE = {
  location: 'location',
  user: 'user',
};

exports.getGames = async (req, res, next) => {
  const { query } = req;

  switch (query.type.toLowerCase()) {
    case QUERY_TYPE.location: {
      const games = await gameService.findByLocation(query);
      res.json({ result: 'ok', data: games });
      break;
    };
    case QUERY_TYPE.user: {
      //TODO: findByUser
      break;
    };
    default: {
      res.status(400).json({ result: 'fail', message: `query type error. ${type} is not valid type.` });
      return;
    }
  }
};

//test router
exports.create = async (req, res, next) => {
  const body = req.body;
  try {
    const games = await gameService.create(body);
    res.status(200).json({ result: 'ok', data: games });
  } catch (err) {
    next(err);
  }
};
