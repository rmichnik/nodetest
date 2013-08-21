module.exports = function (app) {

    var model = require('../models');

    app.get('/users/list', function (req, res) {
        db.query("SELECT * FROM tb_user LIMIT 20")
            .success(function (rows) {
                res.send(rows);
            })
            .error(function (error) {
                res.send(error);
            })
        ;
    });

    app.get('/users/list/limit/:limit', function (req, res) {
        db.query("SELECT * FROM tb_user LIMIT " + req.param('limit'))
            .success(function (rows) {
                res.send(rows);
            })
            .error(function (error) {
                res.send(error);
            })
        ;
    });

    app.get('/users/list/:id', function (req, res) {

        var User = model.User;
        User.find(req.params.id).success(function (user) {
                res.send(user);
               user.getUserComplement({where: {co_user : req.params.id}}).success(function (data) {
                 console.log(data);
               });
            }
        );
    });
}