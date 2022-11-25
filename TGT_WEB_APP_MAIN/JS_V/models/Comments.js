// const Comment = (sequelize, DataTypes) =>{
//     associate = function(models) {
//         belongsTo(models.User, {foreignKey: 'userId', as: 'user'})
//       };
//     return sequelize.define('Comment', {
//         userId: DataTypes.STRING,
//         comment: DataTypes.STRING
//     });

// };



// module.exports = Comment;



module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        userId: DataTypes.STRING,
        comment: DataTypes.STRING
    }, {});
    Comment.associate = function(models) {
      Comment.belongsTo(models.User, {foreignKey: 'userId'})
    };
    return Comment;
  };
 