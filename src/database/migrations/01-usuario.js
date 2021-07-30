'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario', {
        id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        email: {
            type: Sequelize.DataTypes.STRING(100),
            allowNull:false
        }, 
        password: {
            type: Sequelize.DataTypes.STRING(100),
            allowNull:false
        }, 
        name:{
          type: Sequelize.DataTypes.STRING(100),
          allowNull:false
        },
        createdAt: {type: Sequelize.DataTypes.DATE},
        updatedAt: {type: Sequelize.DataTypes.DATE}

    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario')
  }
};