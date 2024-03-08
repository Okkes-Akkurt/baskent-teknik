const Admin = require('../models/admin');
const bcrypt = require('bcrypt');

// Admin kayıt işlemi
exports.registerAdmin = async (req, res) => {
	try {
		const { username, password } = req.body;

		// Şifre hashleme
		const hashedPassword = await bcrypt.hash(password, 10);

		// Yeni admin oluştur
		const newAdmin = new Admin({ username, password: hashedPassword });

		// Veritabanına kaydet
		await newAdmin.save();

		res.status(201).json({ message: 'Admin successfully registered.' });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Admin giriş işlemi
exports.loginAdmin = async (req, res) => {
	try {
		const { username, password } = req.body;

		// Kullanıcıyı veritabanından bul
		const admin = await Admin.findOne({ username });

		if (!admin) {
			return res.status(401).json({ message: 'Invalid credentials.' });
		}

		// Şifre karşılaştırma
		const isPasswordValid = await bcrypt.compare(password, admin.password);

		if (!isPasswordValid) {
			return res.status(401).json({ message: 'Invalid credentials.' });
		}

		res.status(200).json({ message: 'Admin successfully logged in.' });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
