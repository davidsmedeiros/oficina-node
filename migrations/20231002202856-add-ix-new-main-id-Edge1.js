'use strict';
const tableName = 'Edge1s'
const indexName = 'ix_Edge1s_new_main_id'
const columnName = 'new_main_id'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS 
      ${indexName} ON "${tableName}" 
      USING btree (${columnName})
    `)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      DROP INDEX CONCURRENTLY IF EXISTS ${indexName}
    `)
  }
};
