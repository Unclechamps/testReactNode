'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.renameColumn(
      'Movies',
      'year',
      'imageURL',
      {
        type:Sequelize.STRING,
      }
    )

    queryInterface.addColumn(
      'Movies',
      'price',
      {
        type : Sequelize.INTEGER
      }
    )

  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
     'Movies',
     'price',
     {
       type: Sequelize.INTEGER
     }
   )

  }
};
