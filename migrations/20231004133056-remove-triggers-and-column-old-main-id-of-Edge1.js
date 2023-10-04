'use strict';
const tableName = 'Edge1s'
const triggerName = `${tableName}_set_old_main_id_trigger`
const oldColumn = 'old_main_id'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      BEGIN TRANSACTION;
      LOCK TABLE "${tableName}" IN EXCLUSIVE MODE;
      DROP TRIGGER IF EXISTS ${triggerName} ON "${tableName}";
      ALTER TABLE "${tableName}" DROP COLUMN ${oldColumn};
      COMMIT;
  `)
  },

  async down (queryInterface, Sequelize) {

  }
};
