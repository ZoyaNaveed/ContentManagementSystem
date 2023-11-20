const mongoose = require("mongoose");

const UserStorySchema = new mongoose.Schema({
  userStoryDescription: {
    type: String,
  },
  projectName: {
    type: String,
  },
  priority: {
    type: Number,
  },
});

const UserStory = mongoose.model("UserStory", UserStorySchema);

module.exports = UserStory;
