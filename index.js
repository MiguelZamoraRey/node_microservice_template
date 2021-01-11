const env = require('dotenv').config();

if (env.error) {
  // remember create .env file with S_DB and S_PORT variable
  throw env.error;
}

const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || process.env.S_PORT;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.S_DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
    });
  })
  .catch((err) => { throw err; });
