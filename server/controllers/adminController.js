const Admin = require('../models/adminModel.js');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

const registerAdmin = async (req, res) => {
	const { email, username, password } = req.body;

	try {
		if (!password || typeof password !== 'string') {
			console.error('Invalid password:', password);
			return res.status(400).json({ message: 'Geçersiz şifre.' });
		}

		const existingAdmin = await Admin.findOne({ email });
		if (existingAdmin) {
			console.error('Email already exists:', email);
			return res.status(400).json({ message: 'Bu email ile daha önce kayıt olundu.' });
		}

		const existingUsername = await Admin.findOne({ username });
		if (existingUsername) {
			console.error('Username already exists:', username);
			return res.status(400).json({ message: 'Bu kullanıcı adı ile daha önce kayıt olundu.' });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const newAdmin = new Admin({ email, username, password: hashedPassword });
		await newAdmin.save();

		res.status(200).json({ message: 'Registration successful' });

		await sendAdminApprovalEmail(email, username);

		console.log('Received request body:', req.body);
	} catch (error) {
		console.error('Error:', error);
		return res.status(500).json({ error: 'Error registering admin.' });
	}
};

async function sendAdminApprovalEmail(email, username) {
	const approvalLink = `https://baskentapi.onrender.com/approve-admin/${email}`; // Onay bağlantısı oluşturun
	const transporter = nodemailer.createTransport({
		host: 'smtp.hostinger.com',
		secure: false,
		port: 587,
		auth: { user: 'info@baskentteknik.com', pass: 'Baskentteknik06.' },
		requireTLS: true,
	});
	const mailOptions = {
		from: 'info@baskentteknik.com',
		to: 'info@baskentteknik.com',
		subject: 'Admin Kaydı Onayı',
		html: `Merhaba,
			   <br><br>
               ${email} email adresine ve ${username} kullanıcı adına sahip kişinin admin kaydı için onayınız gerekiyor. Lütfen aşağıdaki bağlantıya tıklayarak kaydınızı onaylayın:<br>
               <a href="${approvalLink}">${approvalLink}</a><br><br>
               İyi günler.`,
	};

	await transporter.sendMail(mailOptions);
}

const approveAdmin = async (req, res) => {
	const email = req.params.email;
	try {
		const admin = await Admin.findOne({ email });
		admin.isApproved = true;
		await admin.save();
		res.status(200).send(
			'<h1 style="font-size: 18px;font-weight: bold;">Admin yetkilendirmesi başarı ile tamamlandı.</h1>',
		);
	} catch (error) {
		console.error('Error:', error.message);
		return { status: 500, error: 'Error approving admin registration.' };
	}
};

const loginAdmin = async (req, res) => {
	try {
		const { username, password } = req.body;

		const admin = await Admin.findOne({ username });

		if (!admin) {
			return res.status(401).json({ message: 'Invalid credentials.' });
		}

		if (!admin.isApproved) {
			return res.status(403).json({ message: 'Admin account is not approved yet. Please wait for approval.' });
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

module.exports = { loginAdmin, registerAdmin, approveAdmin };
