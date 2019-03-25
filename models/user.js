module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        login: DataTypes.STRING,
        localisation: DataTypes.STRING
    }, {
        timestamps: false,
        tableName: "user"
    });

    return User;
}