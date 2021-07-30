module.exports = function(sequelize, DataTypes){
    const alias = "Nota"
    const cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        texto: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        usuarioFK: {
            type: DataTypes.INTEGER,
            allowNull:false
        }
    }
    const config = {
        tableName: "nota",
        timestamps: true,
    }
    const Nota = sequelize.define(alias, cols, config);


    return Nota
}



