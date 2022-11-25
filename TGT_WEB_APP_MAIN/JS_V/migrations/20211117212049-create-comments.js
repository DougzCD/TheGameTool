'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.createTable('comments', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false
        },
        comment: {
          type: Sequelize.STRING,
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.fn('NOW')
        },

        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.fn('NOW')  
        }
        
      });

  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.dropTable('comments');
  }
};
