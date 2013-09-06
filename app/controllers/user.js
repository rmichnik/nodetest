module.exports = function (app) {
  mongoose = require('mongoose');
  auth = require('../../auth');
  passport = require('passport');

  // form to create new user, note same route down but differente http method
  app.get('/user/new', function (req, res) {
    res.render('user/new');
  });

  // create new user
  app.post('/user/new', function (req, res) {
    var UserModel = mongoose.model('User');

    var data = req.param('data')

    data.username = data.username.toLowerCase();
    data.password = require('crypto').createHash('md5').update(data.password).digest('hex');

    var User = new UserModel(data);

    User.save(function (err, result) {
      if (err) console.error(err)
      res.send({success: true});
    });
  });

  // list all users
  app.get('/user/list', function (req, res) {
    var UserModel = mongoose.model('User');

    UserModel.find(null, function (err, data) {
      if (err) console.error(err);
      res.render('user/list', {data: data});
    });
  });

  // remove single user
  app.post('/user/:id/remove', function (req, res) {
    var UserModel = mongoose.model('User');

    UserModel.findById(req.params.id).remove(function (err, result) {
      if (err) res.send(err);

      res.send({success: true});
    });
  });

  // exec login
  app.post("/user/login",
    passport.authenticate('local'), function(req, res){
      res.redirect('/');
    });

  // logout
  app.post('/user/logout', function (req, res) {
    req.session.destroy();
    res.redirect('/')
  });

  // get user session
  app.get('/user/session', function(req, res){
    userData = {}
    if(req.user){
      userData = {
        username: req.user.username,
        _id: req.user._id
      }
    }
    res.send(userData);
  });
}