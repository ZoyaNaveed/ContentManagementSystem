const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  teamName: {
    type: String,
  },
});

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;
