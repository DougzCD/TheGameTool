'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('comments', [
      {
          userId: 1,
          comment: 'lol that is so funny!'
      },
      {
          userId: 2,
          comment: 'I like to go birdwatching with my dog'
      },
      {
          userId: 3,
          comment: 'Plz delete your account, Todd'
      },
      {
          userId: 4,
          comment: 'woof woof woof'
      }
    ], {});
 
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('comments', null, {});

  }
};
