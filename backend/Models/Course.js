const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    instructor: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    duration: {
        type: Number,
        require: true
    },
    lessons: [{
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        link: {
            type: String,
            require: true
        },
        format: {
            type: String,
            require: true
        }
    }],
    assessment: [{
        question: {
            type: String,
            require: true
        },
        answer: {
            type: String,
            require: true
        },
        options: [{
            type: String
        }]
    }]
});

const Course = mongoose.model('courses', courseSchema);

module.exports = {Course};