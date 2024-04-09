const cloudinary = require('cloudinary').v2;
const Logo = require('../models/logoModel.js');
const fs = require('fs');

exports.uploadLogo = async (req, res) => {
	try {
		if (!req.files || !req.files.file) {
			return res.status(400).json({ error: 'No file uploaded' });
		}

		const file = req.files.file;

		console.log('file', file);

		const result = await cloudinary.uploader.upload(file.tempFilePath, {
			folder: 'baskentteknik/logos',
			use_filename: true,
		});

		const { title } = req.body;

		const newLogo = new Logo({
			title,
			filename: result.original_filename,
			url: result.secure_url,
		});

		await newLogo.save();
		fs.unlinkSync(file.tempFilePath);
		res.json({ message: 'Logo uploaded successfully', imageUrl: result.secure_url });
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

exports.deleteLogo = async (req, res) => {
	try {
		const { id } = req.params;
		console.log('deleteLogo',id);
		await Logo.findByIdAndDelete(id);
		res.json({ message: 'Logo deleted successfully' });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};
