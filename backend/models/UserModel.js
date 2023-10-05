const mongoose = require("mongoose");
const specialization_array = require("../specializations");
const institute_array = require("../institutes");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 4,
    maxlength: 20,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  institute: {
    type: String,
    required: true,
    trim: true,
    default: "others", // so that user will not have to provide this when not needed like at time of signing up or logging in ,
    enum: {
      values: institute_array,
      message: "{VALUE} is not supported institute", // if institute doesn't belong to the above list !
    },
  },
  specialization: {
    type: String,
    required: true,
    trim: true,
    default: "others",
    enum: {
      values: specialization_array,
      message: "{VALUE} is not a supported skill",
    },
  },
  my_hackathons: {
    hackathons: [String],
    requests: [
      {
        team_name: String,
        hackathon_name: String,
      },
    ],
  },
});

module.exports = mongoose.model("UserModel", UserSchema);
