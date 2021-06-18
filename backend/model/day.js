const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    default:
      "https://api.time.com/wp-content/uploads/2020/03/gym-coronavirus.jpg",
  },
  exercise: [{ type: mongoose.Schema.Types.ObjectID, ref: "Exercise" }],
  
});

const Day = mongoose.model("Day", userSchema);
module.exports = Day;
