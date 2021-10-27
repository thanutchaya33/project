module.exports = (sequelize, DataTypes) => {
    const Queue = sequelize.define('Queue', {
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        tel: DataTypes.STRING,
        address: DataTypes.STRING,
        location: DataTypes.STRING,
        serve: DataTypes.STRING,
        time: DataTypes.STRING,
        date: DataTypes.STRING,
    })
    return Queue;
}