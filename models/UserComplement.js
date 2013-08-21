module.exports = function (sequelize, DataTypes) {
    return sequelize.define('UserComplement', {
            co_user_complement: {type: DataTypes.INTEGER, primaryKey: true}
            ,co_department_full: DataTypes.INTEGER
            ,co_department_in_office: DataTypes.INTEGER
            ,co_occupation: DataTypes.INTEGER
            ,co_type_contract: DataTypes.INTEGER
            ,co_user: DataTypes.INTEGER
            ,ds_competence: DataTypes.STRING
            ,fl_user_manager: DataTypes.BOOLEAN
            ,nu_siape: DataTypes.INTEGER
        },
        {
            tableName: 'tb_user_complement'
        });
}