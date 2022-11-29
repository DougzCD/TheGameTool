const Characters = require("./Characters");
const genshindb = require('genshin-db');

genshindb.characters('names', {matchAliases:true, matchCategories:true, verboseCategories:true})

module.exports = (sequelize, DataTypes) => {
    const OwnedCharacters = sequelize.define('OwnedCharacters', {
        userId: DataTypes.STRING,
        ownedCharactersList: new Characters
    }, {});
    OwnedCharacters.associate = function(models) {
      OwnedCharacters.belongsTo(models.User, {foreignKey: 'userId'})
    };
    return OwnedCharacters;
  };
 