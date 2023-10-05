const mongoose = require("mongoose");
const hackathonNames = require("../hackathons");
const specialization_array = require("../specializations");
const TeamSchema = new mongoose.Schema({
  Hackathon_id: {
    type: String,
    required: true,
    trim: true,
  },
  Team_name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  Team_leader: {
    required: true,
    type: String,
    trim: true,
  },
  Team_members: {
    type: [String],
    required: true,
    default: [],
  },
  repo_link: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("TeamModel", TeamSchema);
