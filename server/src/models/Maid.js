module.exports = ( sequelize, DataTypes ) => {
    const Maid = sequelize.define('Maid', {
        nickname: DataTypes.STRING,
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        serve: DataTypes.TEXT,
        language: DataTypes.STRING,
        age: DataTypes.STRING,
        tel: DataTypes.STRING,
    })
    return Maid;
}