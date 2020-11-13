const Game = require('../models/Game');

exports.findByLocation = async ({ lat, lng }) => {
  console.log(lat, lng);
  const cursor = Game.find({
    location: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [lat, lng]
        },
        $minDistance: 0,
        $maxDistance: 12000
      }
    }
  }).limit(10).cursor();

  const result = await cursor;

  console.log(result);
};

exports.create = async (body) => {
  const result = await Game.create(body);

  return result;
};
