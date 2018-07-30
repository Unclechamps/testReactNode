'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.renameColumn(
      'Movies',
      'name',
      'title',
      {
        type:Sequelize.STRING,
      }
    )
  },

  down: (queryInterface, Sequelize) => {

  }
};
