const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, minLength: 2 },
    description: { type: String, minLength: 10 },
    image: { type: String },
    creatAt: { type: Date, default: Date.now },
    upDateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
