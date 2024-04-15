const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const adminRoute = require('./routes/adminRoute');
const conn = require('./db.js');
const photoRoute=require('./routes/photoRoute.js')
const logoRoute = require('./routes/logoRoute.js');
const path = require('path');
const nodemailer = require('nodemailer');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;
dotenv.config();

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUD_API_KEY,
	api_secret: process.env.CLOUD_API_SECRET,
});

// Connect to the DB
conn();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(fileUpload({useTempFiles:true}))


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


const transporter = nodemailer.createTransport({
	host: 'smtp.hostinger.com',
	port: 465,
	secure: false,
	auth: {
		user: 'info@baskentteknik.com',
		pass: 'Baskentteknik06.',
	},

});


app.post('/send-email', (req, res) => {
	const { to_email, from_name, from_phone, from_email, subject, message } = req.body;

	const mailOptions = {
		from: `"${from_name}" <${from_email}>`,
		to: to_email,
		subject: subject,
		text: `${from_name} (${from_phone}): ${message}`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error('Error sending email:', error);
			return res.status(500).json({ success: false, error: 'Failed to send email' });
		}

		console.log('Email sent:', info.response);
		return res.status(200).json({ success: true, message: 'Email sent successfully' });
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
