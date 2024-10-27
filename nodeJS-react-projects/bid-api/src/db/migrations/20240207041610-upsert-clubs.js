'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('clubs', 'imageUrl', {
          type: Sequelize.STRING,
          after: 'uf'
        }, { transaction: t }),
      ]);
    });
  },

  /** Rollback */
  async down (queryInterface) {
    return queryInterface.sequelize.transaction( t => {
      return Promise.all([
        queryInterface.removeColumn('clubs', 'imageUrl', {transaction: t})
      ]);
    });
  }
};
