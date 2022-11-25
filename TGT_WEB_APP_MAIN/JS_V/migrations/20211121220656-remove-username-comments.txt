'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.removeColumn('comments', 'username');

  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.addColumn('comments', 'username', {
        type: Sequelize.STRING,
        allowNull: false
      });

  }
};
