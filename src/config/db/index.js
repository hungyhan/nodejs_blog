const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    // await mongoose.connect("mongodb://devops:devops123@ac-enkuoia-shard-00-00.dvkzpdr.mongodb.net:27017,ac-enkuoia-shard-00-01.dvkzpdr.mongodb.net:27017,ac-enkuoia-shard-00-02.dvkzpdr.mongodb.net:27017/education_dev?ssl=true&replicaSet=atlas-xxxxxx-shard-0&authSource=admin&retryWrites=true&w=majority");
    await mongoose.connect("mongodb://127.0.0.1:27017/education_dev");
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

module.exports = {
  connectToDatabase,
};