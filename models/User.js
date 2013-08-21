module.exports = function (sequelize, DataTypes) {

    return sequelize.define('User', {
            co_user: {type: DataTypes.INTEGER, primaryKey: true},
            co_type_user: DataTypes.INTEGER,
            no_user: DataTypes.STRING,
            ds_password: DataTypes.STRING,
            fl_active: DataTypes.BOOLEAN,
            dt_create: DataTypes.DATE,
            sg_gender: DataTypes.STRING,
            ds_nickname: DataTypes.STRING,
            nu_cpf: DataTypes.STRING,
            dt_birthdate: DataTypes.DATE,
            nu_birth_day: DataTypes.INTEGER,
            nu_birth_month: DataTypes.INTEGER,
            no_image_profile: DataTypes.STRING,
            fl_first_access: DataTypes.BOOLEAN,
            fl_banned: DataTypes.BOOLEAN,
            ds_salt: DataTypes.STRING,
            co_external_key: DataTypes.STRING,
            ds_justify_remove: DataTypes.STRING,
            ds_registration: DataTypes.STRING
        },
        {
            tableName: 'tb_user'
        }
    );

}