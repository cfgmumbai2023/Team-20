const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    contact: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    expertise: {
        type: String,
        require: true
    },
    matches_coached: {
        type: Number,
        required: true
    },
    certifications: {
        type: Number,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    verified: {
        type: Boolean,
    },
    level: {
        type: String,
        require: true
    }
});

const User = mongoose.model('users', userSchema);

module.exports = User;