const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const adminSchema = new Schema({
	username: { type: String, required: true, unique: true, trim: true },
	email: { type: String, required: true, unique: true, trim: true },
	password: { type: String, required: true, trim: true },
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
