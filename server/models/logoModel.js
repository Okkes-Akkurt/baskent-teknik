const mongoose = require('mongoose');

const logoSchema = new mongoose.Schema({
	filename: String,
    path: String,
    title:String
});

const Logo = mongoose.model('Logo', logoSchema);

module.exports = Logo;
