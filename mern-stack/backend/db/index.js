const mongoose = require("mongoose");

exports.connect = (app) => {
  const options = {
    useNewUrlParser: true,
    autoIndex: false,
    maxPoolSize: 10,
  };

  const connectWithRetry = () => {
    mongoose.Promise = global.Promise;
    console.log("Connecting to MongoDB...");

    mongoose
      .connect(process.env.MONGODB_URI, options)
      .then(() => {
        console.log("MongoDB is connected");
        app.emit("ready");
      })
      .catch((err) => {
        console.log("MongoDB connection unsuccessful, retrying in 2 seconds.", err.message);
        setTimeout(connectWithRetry, 2000);
      });
  };

  connectWithRetry();
};
