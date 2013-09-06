var mongoose = require('mongoose');

var PhoneSchema = new mongoose.Schema({
  number: Number
});

mongoose.model('Phone', PhoneSchema);