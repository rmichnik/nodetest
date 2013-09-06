var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passport = require('passport');

UserSchema = new Schema({
  username: String,
  password: String,
  name: {
    first: String,
    last: String
  },
  email: String,
  phone: {
    type: Schema.ObjectId,
    ref: 'Phone'
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
});

UserSchema.statics.isValidUserPassword = function (username, password, done) {
  this.findOne({username: username}, function (err, user) {
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false, {message: 'Incorrect username.'});
    }

    var sentPassword = require('crypto').createHash('md5').update(password).digest('hex');

    if (sentPassword == user.password) {
      return done(null, user);
    }

    done(null, false, {message: 'Incorrect password'});

  });
};

mongoose.model('User', UserSchema);