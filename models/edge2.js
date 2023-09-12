'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Edge2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Edge2.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,    
      unique: true,    
    },    
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    main_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }    
  }, {
    indexes: [
      {
        fields: ['id'],
      },
      {
        fields: ['main_id'],
      },
    ],       
    sequelize,
    modelName: 'Edge2',
  });
  return Edge2;
};