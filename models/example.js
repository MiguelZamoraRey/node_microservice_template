const mongoose = require('mongoose');

const { Schema } = mongoose;
const ExampleSchema = Schema({
  name: String,
});
module.exports = mongoose.model('Example', ExampleSchema);
