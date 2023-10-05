const mongoose = require("mongoose");
const HackathonSchema = new mongoose.Schema({
  name: String,
  organizer: String,
  description: String,
  location: String,
  startDate: Date,
  endDate: Date,
  registrationDeadline: Date,
  prizes: [{ rank: String, prize: String }],
  sponsors: [String],
  maxteamSize: Number,
  minteamSize: Number,
  hackathonWebsite: String,
});

module.exports = mongoose.model("HackathonModel", HackathonSchema);
