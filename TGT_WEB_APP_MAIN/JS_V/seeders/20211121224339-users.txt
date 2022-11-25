'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
          username: 'Todd',
          password: 'abcd'
      },
      {
          username: 'Skyler',
          password: 'abcd'
      },
      {
          username: 'Sk8erBoi',
          password: 'abcd'
      },
      {
          username: 'onlysayswoof',
          password: 'abcd'
      }
    ], {});
 
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('users', null, {});

  }
};

