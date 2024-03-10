const Logo = require('../models/logoModel.js');

exports.uploadLogo = async (req, res) => {
	try {
		const { title } = req.body;

		const newLogo = await new Logo({
			title,
			filename: req.file.originalname,
			path: req.file.path,
		});

		await newLogo.save();

		res.json({ message: 'Logo uploaded successfully', filePath: req.file.path });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};


exports.getAllLogos = async (req, res) => {
	try {
		const logos = await Logo.find();
		res.json(logos);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};
