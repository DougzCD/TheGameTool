'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('comentarios', [
    {
      comentario: 'Comentário do Fulano',
      usuario: "Fulano"
    },
    {
      usuario: 'Ciclano',
      comentario: 'Fulano, seu comentário é muito ruim!'
    },
    {
      usuario: 'Beltrano',
      comentario: 'Só li verdades.'
    }
  ], {});
    
    
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comentarios', null, {});
    
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
