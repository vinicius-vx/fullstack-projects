'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('players', {
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
      nickname:{
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      birth_date:{
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      contract_type:{
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      contract_id:{
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        unique: true
      },
      start_date:{
        allowNull: true,
        type: Sequelize.DataTypes.STRING
      },
      publication_date:{
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
        }}
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('players');
  }
};
