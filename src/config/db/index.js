const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/education_dev");
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}

module.exports = {
  connectToDatabase,
};