const Photo = require('../models/photoModel.js');

exports.uploadPhoto = async (req, res) => {
	try {
		const { title, subtitle, } = req.body;

		if (!req.file) {
			return res.status(400).json({ error: 'No file uploaded' });
		}

		const newPhoto = await new Photo({
			title,
			subtitle,
			filename: req.file.originalname,
			path: req.file.path,
		});

		await newPhoto.save();

		res.json({ message: 'Photo uploaded successfully', filePath: req.file.path });
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
