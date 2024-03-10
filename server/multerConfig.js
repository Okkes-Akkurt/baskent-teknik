// multerConfig.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const getStorage = (uploadType) => {
	const folder = uploadType === 'photo' ? 'photos' : 'logos';

	const storage = multer.diskStorage({
		destination: (req, file, cb) => {
			const uploadPath = path.join(__dirname, 'uploads', folder);

			if (!fs.existsSync(uploadPath)) {
				fs.mkdirSync(uploadPath, { recursive: true });
			}

			cb(null, uploadPath);
		},
		filename: (req, file, cb) => {
			cb(null, file.originalname);
		},
	});

	return multer({ storage: storage });
};

module.exports = getStorage;
