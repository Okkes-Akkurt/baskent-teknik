const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const adminRoute = require('./routes/adminRoute');
const conn = require('./db.js');
dotenv.config();

// Connect to the DB
conn();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer konfigürasyonu
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		if (file.fieldname === 'file') {
			// 'photo' veya 'logo' dosya alanı adına göre klasör belirle
			const folder = file.fieldname === 'photo' ? 'home' : 'logos';
			cb(null, path.join(__dirname, 'src', 'assets', folder));
		}
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage: storage });

// Multer dosya yükleme endpoint'leri
app.post('/upload/photo', upload.single('file'), (req, res) => {
	res.json({ message: 'Fotoğraf başarıyla yüklendi', filePath: req.file.path });
});

app.post('/upload/logo', upload.single('file'), (req, res) => {
	res.json({ message: 'Logo başarıyla yüklendi', filePath: req.file.path });
});

app.use('/', adminRoute);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
