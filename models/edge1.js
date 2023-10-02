'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Edge1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  Edge1.init({
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
      type: DataTypes.BIGINT,
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
    modelName: 'Edge1',
  });  
  return Edge1;
};