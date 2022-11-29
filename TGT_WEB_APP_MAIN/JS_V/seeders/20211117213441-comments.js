'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {
    const func = ()=>{
        const allCharacters = axios.get('https://genshin-db-api.vercel.app/api/characters?query=names&matchAliases=true&matchCategories=true&verboseCategories=true');
    }
  
    func();

    await queryInterface.bulkInsert('allCharacters', {});
 
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('comments', null, {});

  }
};
