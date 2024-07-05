const mongoose = require('mongoose')

async function ConnectToDb(URL){
    const db = mongoose.connect(`mongodb://127.0.0.1:27017/${URL}`).then(console.log(`Connected to MongoDB`));
}

module.exports = {
    ConnectToDb
}