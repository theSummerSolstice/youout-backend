const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.ATLAS_DB_ID}:${process.env.ATLAS_DB_PASSWORD}@youout.urfkx.mongodb.net/youout?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.error('connection error: ' + error));
db.once('open', () => console.log('connected to database'));
