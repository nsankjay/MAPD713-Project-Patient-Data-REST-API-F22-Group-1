const mongoose = require('mongoose');

const connection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_CONNECTION);
        console.log(`Database Connected`);
    }
     catch (error) {
        console.log(error);
        process.exit(1);
     }
}

module.exports = connection;