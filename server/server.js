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
const { FILE } = require('dns');
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




const transporter = nodemailer.createTransport({ host: 'smtp.hostinger.com', secure: false, port: 587, auth: { user: 'info@baskentteknik.com', pass: 'Baskentteknik06.', }, requireTLS: true, });


app.post('/send-email', async(req, res) => {
	const { to_email, from_name, from_phone, from_email, subject, message } = req.body;

	const mailOptions = {
		from: 'info@baskentteknik.com',
		to: to_email,
		subject: subject,
		text: `İsim: ${from_name}, Telefon No: ${from_phone}, E-mail: ${from_email} , Mesaj: ${message}`,
	};

	console.log('mailConfig',mailOptions)


	await transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log('Error sending email:', error);
		} else {
			console.log('Email sent:', info.response);
		}
	});

	await res.status(200).json({
		message:'Email başarılı bir şekilde gönderilmiştir'
	})
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
