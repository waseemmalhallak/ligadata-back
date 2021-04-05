module.exports = (sequelize, Sequelize) => {
	const Corona = sequelize.define('corona_data', {	
	  name: {
			type: Sequelize.STRING
	  },
	  region: {
			type: Sequelize.STRING
  	},
	  country: {
			type: Sequelize.STRING
	  },
	  date: {
			type: Sequelize.STRING
    },
    value: {
      type: Sequelize.INTEGER
    }
	});
	
	return Corona;
}