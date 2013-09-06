var User = require('./app/models/user');

exports.isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/");
  }
}

exports.userExist = function (req, res, next) {
  User.count({
    username: req.body.username
  }, function (err, count) {
    if (count === 0) {
      next();
    } else {
      res.redirect("/singup");
    }
  });
}