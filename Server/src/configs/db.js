const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb://shakti:shakti@cluster0-shard-00-00.ycerw.mongodb.net:27017,cluster0-shard-00-01.ycerw.mongodb.net:27017,cluster0-shard-00-02.ycerw.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-bun363-shard-0&authSource=admin&retryWrites=true&w=majority",
  );
};