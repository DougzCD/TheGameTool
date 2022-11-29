const genshindb = require('genshin-db');

genshindb.characters('names', {matchAliases:true, matchCategories:true, verboseCategories:true})

module.exports = (sequelize, DataTypes) => {
    const Characters = sequelize.define('Characters', {
        name: DataTypes.STRING,
        Characters: DataTypes.STRING,
        name: DataTypes.STRING,
        fullname: DataTypes.STRING, // only Russian has shortened "name" for inazuma characters
        title: DataTypes.STRING, // empty strings for traveler
        description: DataTypes.STRING,
        rarity: '4' | '5',
        element: DataTypes.STRING,
        weapontype: DataTypes.STRING,
        substat: DataTypes.STRING,
        gender: DataTypes.STRING, // manually translated
        body: DataTypes.STRING, // untranslated
        association: DataTypes.STRING, // untranslated
        region: DataTypes.STRING, // empty string if player character or crossover (aloy)
        affiliation: DataTypes.STRING, // empty string if player character
        birthdaymmdd: DataTypes.STRING, // empty string if player character
        birthday: DataTypes.STRING, // empty string if player character
        constellation: DataTypes.STRING,
        cv: {
            english: DataTypes.STRING,
            chinese: DataTypes.STRING,
            japanese: DataTypes.STRING,
            korean: DataTypes.STRING,
        },
        costs: {
            "ascend1":[
                {
                    "name": DataTypes.STRING,
                    "count": DataTypes.INTERGER
                },
                {
                    "name": DataTypes.STRING,
                    "count": DataTypes.INTERGER
                },
                {
                    "name": DataTypes.STRING,
                    "count": DataTypes.INTERGER
                },
                {
                    "name": DataTypes.STRING,
                    "count": DataTypes.INTERGER
                }
            ],
            "ascend2": [{
                "name": DataTypes.STRING,
                "count": DataTypes.INTERGER
            },
            {
                "name": DataTypes.STRING,
                "count": DataTypes.INTERGER
            },
            {
                "name": DataTypes.STRING,
                "count": DataTypes.INTERGER
            },
            {
                "name": DataTypes.STRING,
                "count": DataTypes.INTERGER
            }],
            "ascend3": [{
                "name": DataTypes.STRING,
                "count": DataTypes.INTERGER
            },
            {
                "name": DataTypes.STRING,
                "count": DataTypes.INTERGER
            },
            {
                "name": DataTypes.STRING,
                "count": DataTypes.INTERGER
            },
            {
                "name": DataTypes.STRING,
                "count": DataTypes.INTERGER
            }],
            "ascend4": [{
                "name": DataTypes.STRING,
                "count": DataTypes.INTERGER
            },
            {
                "name": DataTypes.STRING,
                "count": DataTypes.INTERGER
            },
            {
                "name": DataTypes.STRING,
                "count": DataTypes.INTERGER
            },
            {
                "name": DataTypes.STRING,
                "count": DataTypes.INTERGER
            }],
            "ascend5": [{
                "name": DataTypes.STRING,
                "count": DataTypes.INTERGER
            },
            {
                "name": DataTypes.STRING,
                "count": DataTypes.INTERGER
            },
            {
                "name": DataTypes.STRING,
                "count": DataTypes.INTERGER
            },
            {
                "name": DataTypes.STRING,
                "count": DataTypes.INTERGER
            }],
            "ascend6": [{
                "name": DataTypes.STRING,
                "count": DataTypes.INTERGER
            },
            {
                "name": DataTypes.STRING,
                "count": DataTypes.INTERGER
            },
            {
                "name": DataTypes.STRING,
                "count": DataTypes.INTERGER
            },
            {
                "name": DataTypes.STRING,
                "count": DataTypes.INTERGER
            }]
        },
        images: {
            nameicon: DataTypes.STRING,
            namesideicon: DataTypes.STRING,
            namegachasplash: DataTypes.STRING, // lumine/aether doesn't have this
            namegachaslice: DataTypes.STRING, // lumine/aether doesn't have this

            card: DataTypes.STRING,     // wikia
            portrait: DataTypes.STRING, // wikia
            icon: DataTypes.STRING,     // hoyolab
            sideicon: DataTypes.STRING, // hoyolab
            cover1: DataTypes.STRING, // official site
            cover2: DataTypes.STRING, // official site
            "hoyolab-avatar": DataTypes.STRING, // manually entered from hoyolab
        },
        url: {
            fandom: DataTypes.STRING,
        },
        stats: StatFunction,
        version: DataTypes.STRING,
    
    }, {});
    
    return Characters;
};