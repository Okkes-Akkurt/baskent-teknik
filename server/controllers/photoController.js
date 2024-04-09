const cloudinary = require('cloudinary').v2;
const Photo = require('../models/photoModel.js');
const fs = require('fs');

exports.uploadPhoto = async (req, res) => {
	try {
		if (!req.files || !req.files.file) {
			return res.status(400).json({ error: 'No file uploaded' });
		}

		const file = req.files.file;

		const result = await cloudinary.uploader.upload(file.tempFilePath, {
			folder: 'baskentteknik/photos',
			use_filename: true,
		});

		const { title, subtitle } = req.body;

		const newPhoto = new Photo({
			title,
			subtitle,
			filename: result.original_filename,
			url: result.secure_url,
		});

		await newPhoto.save();
		fs.unlinkSync(file.tempFilePath);
		res.json({ message: 'Photo uploaded successfully', imageUrl: result.secure_url });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};




exports.getAllPhotos = async (req, res) => {
	try {
		const photos = await Photo.find();
		res.json(photos);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};


exports.deletePhoto = async (req, res) => {
	try {
		const { id } = req.params;

		await Photo.findByIdAndDelete(id);
		res.json({ message: 'Photo deleted successfully' });

	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};
