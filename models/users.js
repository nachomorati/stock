/*global require*/
/*global module*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var User = new Schema({
  id: ObjectId,
  email: {type: String, unique: true},
  password: {type: String, unique: true}
});

module.exports = mongoose.model('User', User);
