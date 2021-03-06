'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    review: DataTypes.TEXT,
    ProductId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    dataStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
  }, {});
  Review.associate = function (models) {
    // associations can be defined here
    Review.belongsTo(models.Product)
    Review.belongsTo(models.User)
  };
  return Review;
};