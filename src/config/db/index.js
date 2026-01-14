const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_edu_dev');
        console.log('ket noi thanh cong');
    } catch (error) {
        console.log('loi roi', error);
    }
}

module.exports = { connect };
