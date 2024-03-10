const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const adminRoute = require('./routes/adminRoute');
const conn = require('./db.js');
const photoRoute=require('./routes/photoRoute.js')
const logoRoute = require('./routes/logoRoute.js');
dotenv.config();

// Connect to the DB
conn();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/photos', photoRoute);
app.use('/logos', logoRoute);


app.use('/', adminRoute);



app.use((req, res, next) => {
	console.log(`Incoming request: ${req.method} ${req.url}`);
	next();
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
