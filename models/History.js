const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const HistorySchema = new Schema({
  users: [{
    id: {
      type: ObjectId,
      ref: 'User',
    },
    clearTime: {
      type: Number,
      default: null,
    },
    lastSolvedQuiz: {
      type: Number,
      default: null,
    },
  }],
  game: {
    id: {
      type: ObjectId,
      ref: 'Game',
    },
    name: {
      type: String,
    },
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('History', HistorySchema);
