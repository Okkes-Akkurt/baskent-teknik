const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
	filename: String,
    path: String,
    title: String,
    subtitle: String,
    url:String,
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
