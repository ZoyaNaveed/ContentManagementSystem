const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  projectName: {
    type: String,
  },
  projectDescription: {
    type: String,
  },
  ownerName: {
    type: String,
  },
  managerName: {
    type: String,
  },
  teamName: {
    type: String,
  },
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
