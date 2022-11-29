'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {
        nome: 'Fulano',
        login: "Fulano",
        senha: "123"
      },
      {
        nome: 'Ciclano',
        login: "Ciclano",
        senha: "123"
      },
      {
        nome: 'Beltrano',
        login: "Beltrano",
        senha: "123"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('usuarios', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};