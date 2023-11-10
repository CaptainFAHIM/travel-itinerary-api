const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URL);
    console.log(`Database connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error.message);
    }
    
};
module.exports = connectDB;