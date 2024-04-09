const mongoose = require('mongoose');
const { stringify } = require('qs');

const logoSchema = new mongoose.Schema({
	filename: String,
    path: String,
    title: String,
    url:String
});

const Logo = mongoose.model('Logo', logoSchema);

module.exports = Logo;
