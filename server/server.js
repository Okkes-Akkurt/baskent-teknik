const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const adminRoute = require('./routes/adminRoute');
const conn = require('./db.js');
dotenv.config();

//Connect to the DB
conn();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/', adminRoute);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
