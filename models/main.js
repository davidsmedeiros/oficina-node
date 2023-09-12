'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Main extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  Main.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },    
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }  
  }, {
    indexes: [
      {
        fields: ['id'],
      }
    ],
    sequelize,
    modelName: 'Main',
  });  
  Main.afterCreate(async (record, options) => {
    await sequelize.models.Edge1.create(
    { 
      name: `sample ${record.id}`, 
      main_id: record.id
    });  
    await sequelize.models.Edge2.create(
      { 
        name: `sample ${record.id}`, 
        main_id: record.id
      });             
  });
  return Main;
};