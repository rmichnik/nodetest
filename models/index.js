var Sequelize = require('sequelize-postgres').sequelize;

var sequelize = new Sequelize('dbxcorp', 'postgres', null, {
    host: '192.168.56.101',
    port: 5432,
    dialect: 'postgres',
    define: {
        freezeTableName: true,
        underscored: true
    }
});

// modules definition
var models = [
    'User',
    'UserComplement'
];

// including modules
models.forEach(function (model) {
    module.exports[model] = sequelize.import(__dirname + '/' + model);
});


//modules relationships
(function (m) {

    m.User.hasOne(m.UserComplement, { as: 'UserComplement', foreignKey: 'co_user' });
    m.UserComplement.belongsTo(m.User, { as: 'User', foreignKey: 'co_user' });

})(module.exports);

module.exports.sequelize = sequelize;