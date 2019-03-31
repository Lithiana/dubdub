module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        login: DataTypes.STRING,
        localisation: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        timestamps: false,
        tableName: "user"
    });

    return User;
}