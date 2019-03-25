module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define("event", {
        id: {primaryKey: true, type: DataTypes.INTEGER},
        nom: DataTypes.STRING,
        date: DataTypes.DATE,
        description: DataTypes.STRING,
        nb_place: DataTypes.INTEGER,
        adresse: DataTypes.STRING
    }, {
        timestamps: false,
        tableName: "event"
    });

    // Event.associate = (models) => {
    //     Event.belongsTo(models.)
    // };

    return Event;
}