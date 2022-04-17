const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://shakti:shakti@cluster0.ycerw.mongodb.net/ReduxTeachers",
  );
};