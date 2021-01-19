const mongoose = require(`mongoose`);

exports.connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/testoto`, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log(`connecting to mongodb ...`);
  } catch (error) {
    console.log(`error with database ...`);
  }
};