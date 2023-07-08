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
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    photo: {
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
        type: Number,
        require: true
    }
});

const User = mongoose.model('user', userSchema);

module.exports = {User};