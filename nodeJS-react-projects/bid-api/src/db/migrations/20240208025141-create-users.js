'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: { 
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true        
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        unique: true
      },
      password: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      club_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'clubs'
          },
          key: 'id'
        }
      }

    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('users');
  }
};
