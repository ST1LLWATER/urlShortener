'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UrlDB extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON() {
      return {
        ...this.get(),
        createdAt: undefined,
        updatedAt: undefined,
      };
    }
  };
  UrlDB.init({
    url_code: DataTypes.STRING,
    long_url: DataTypes.STRING,
    short_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UrlDB',
    tableName:"urlDB",
  });
  return UrlDB;
};