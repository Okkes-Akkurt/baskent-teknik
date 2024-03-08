const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const adminRoute = require('./routes/adminRoute');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

/* app.connect(process.env.DB_URI, () => {
  console.log('Connected to the DB ')
}); */

app.use('/', adminRoute);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
