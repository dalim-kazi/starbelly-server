const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.DB_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.port}`);
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
