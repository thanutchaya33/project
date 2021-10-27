module.exports = ( sequelize, DataTypes ) => {
    const Bill = sequelize.define('Bill', {
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        tel: DataTypes.STRING,
        hours: DataTypes.TEXT,
        price: DataTypes.STRING,
        namebank: DataTypes.STRING,
        date: DataTypes.STRING,
        time: DataTypes.STRING,
        numberfour: DataTypes.STRING,
        amount: DataTypes.STRING,
    })
    return Bill;
}