const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/thanhdatblog_dev');

        console.log('Connect succesfully');
    } catch (error) {
        console.log('Fail');
    }
}

module.exports = { connect };
