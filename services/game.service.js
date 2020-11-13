const Game = require('../models/Game');

exports.findByLocation = async ({ lat, lng, page = 1, limit = 10 }) => {
  const result = await Game.paginate({
    location: {
      $geoWithin: {
        $center: [[lat, lng], 1] // 1 radius is 111km
      }
    }
  }, { page, limit });

  return result;
};

//Test function
exports.create = async (body) => {
  const result = await Game.create(body);

  return result;
};
