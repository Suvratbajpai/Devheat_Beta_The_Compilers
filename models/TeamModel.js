const mongoose = require("mongoose");
const hackathonNames = require("../hackathons");
const specialization_array = require("../specializations");
const TeamSchema = new mongoose.Schema({
  Hackathon_id: {
    type: String,
    required: true,
    trim: true,
    // enum: hackathonNames,
  },
  Team_name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  //team_code using crypto-random-string.
  Team_leader: {
    required: true,
    type: String,
    trim: true,
    // default : username ,
  },
  Team_members: {
    type: [String],
    required: true,
    default: [],
    validate: {
      validator: function (participants) {
        return participants.length <= 3;
      },
      message: "You can only have a maximum of 3 participants.",
    },
  },
  repo_link: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("TeamModel", TeamSchema);
