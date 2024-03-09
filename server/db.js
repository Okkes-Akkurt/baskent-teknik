const mongoose = require('mongoose');


const conn = () => {
	mongoose
        .connect(process.env.DB_URI, {
			dbName: 'baskent-teknik',
		})
		.then(() => {
			console.log('Connected to the DB');
		})
		.catch((error) => {
			console.error('Connection to the DB failed:', error.message);
		});
};

module.exports = conn;
