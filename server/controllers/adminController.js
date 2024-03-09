const Admin = require('../models/adminModel.js');
const bcrypt = require('bcrypt');

const registerAdmin = async (req, res) => {
	const { email, username, password } = req.body;
	console.log('Received request body:', req.body);

	try {

		if (!password || typeof password !== 'string') {
			console.error('Invalid password:', password);
			return res.status(400).json({ error: 'Invalid password.' });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const newAdmin = new Admin({ email, username, password: hashedPassword });

		await newAdmin.save();

		res.status(201).json({ message: 'Admin successfully registered.' });
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: 'Error registering admin.' });
	}
};



const loginAdmin = async (req, res) => {
	try {
		const { username, password } = req.body;

		const admin = await Admin.findOne({ username });

		if (!admin) {
			return res.status(401).json({ message: 'Invalid credentials.' });
		}

		const isPasswordValid = await bcrypt.compare(password, admin.password);

		if (!isPasswordValid) {
			return res.status(401).json({ message: 'Invalid credentials.' });
		}

		res.status(200).json({ message: 'Admin successfully logged in.', isLoggedIn: true });
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ error: error.message });
	}
};



module.exports = { loginAdmin, registerAdmin };