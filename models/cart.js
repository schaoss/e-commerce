'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    id: DataTypes.INTEGER,
    dataStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
  }, {});
  Cart.associate = function (models) {
    // associations can be defined here
    Cart.hasMany(models.CartItem)
    Cart.belongsToMany(models.Product, {
      as: 'items',
      through: {
        model: models.CartItem, unique: false
      },
      foreignKey: 'cartId'
    });
  };
  return Cart;
};