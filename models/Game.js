const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const GameSchema = new Schema({
  owner: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    address: {
      type: String,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
  timeLimit: {
    type: Number,
    required: true,
  },
  quizList: {
    type: [QuizListSchema],
    default: [],
    required: true,
  },
  users: {
    type: [GameUsersSchema],
    default: [],
  },
}, {
  timestamps: true,
});

const QuizListSchema = new Schema({
  quiz: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  hint: {
    type: String,
    required: true,
  },
});

const GameUsersSchema = new Schema({
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
});

module.exports = mongoose.model('Game', GameSchema);
