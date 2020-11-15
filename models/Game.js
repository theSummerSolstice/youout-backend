const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const QuizListSchema = new Schema({
  index: {
    type: Number,
    required: true,
  },
  keyword: {
    type: String,
    required: true,
  },
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

const PointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

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
  address: String,
  addressDetail: String,
  location: {
    type: PointSchema,
    required: true,
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
  status: {
    users: {
      type: [GameUsersSchema],
      default: [],
    },
    isPlaying: {
      type: Boolean,
      default: false,
    },
    startTime: {
      type: Date,
      default: Date.now(),
    },
  },
}, {
  timestamps: true,
});

GameSchema.index({ location: '2dsphere' });
GameSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Game', GameSchema);
