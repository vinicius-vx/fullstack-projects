'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('clubs', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name:{
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      uf:{
        allowNull: false,
        type: Sequelize.DataTypes.STRING(2)
      },
      created_at:{
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      updated_at:{
        allowNull: true,
        type: Sequelize.DataTypes.STRING
      }
      
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('clubs');
  }
};
