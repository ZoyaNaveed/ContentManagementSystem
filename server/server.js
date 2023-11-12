// import statement
const express = require("express");

// const app;
// getting properties of express
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/Users");

// database connection
const uri =
  "mongodb+srv://sambati:Bk434kWxKmsIHIgB@assignment1.xnqeuih.mongodb.net/se-assignments?retryWrites=true&w=majority";

// will help to connect mongodb with some specified rules and makes connectuin call
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// getting propertirs of mongodb database - connection method contains all properties of batabse
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// app engine starts with below config
app.use(express.json());
app.use(cors());
app.listen(5001, () => {
  console.log(`server started at ${5001}`);
});


// user aadding and retreiving info
app.post("/add-user", async (req, res) => {
  console.log("userinfo", req.body);
  try {
    const user = new User(req.body);
    // save is mongodb method
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Team APIS

// user aadding and retreiving info
app.post("/add-team", async (req, res) => {
  try {
    const team = new Team(req.body);
    // save is mongodb method
    await team.save();
    res.send(team);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/all-teams", async (req, res) => {
  try {
    const team = await Team.find({});
    res.send(team);
  } catch (error) {
    res.status(500).send(error);
  }
});

// project added
app.post("/add-project", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.send(project);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/all-projects", async (req, res) => {
  try {
    const project = await Project.find({});
    res.send(project);
  } catch (error) {
    res.status(500).send(error);
  }
});

// add users with team
app.post("/add-users-to-team", async (req, res) => {
  try {
    console.log("tem with project", req.body);
    const usersWithTeam = new UsersWithTeam(req.body);
    await usersWithTeam.save();
    res.send(usersWithTeam);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.get("/get-users-for-team", async (req, res) => {
  const teamName = req.query.teamName;
  try {
    console.log("tem with project", teamName);
    const usersWithTeam = await UsersWithTeam.findOne({ teamName: teamName });
    if (usersWithTeam) {
      res.send(usersWithTeam);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/add-users-to-team", async (req, res) => {
  try {
    const usersWithTeam = await UsersWithTeam.findOneAndUpdate(
      { teamName: req.body.teamName },
      {
        $set: {
          teamName: req.body.teamName,
          users: req.body.users,
        },
      }
    );
    if (usersWithTeam) {
      res.send(usersWithTeam);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});


//add user story

app.post("/add-user-story", async (req, res) => {
  try {
    const userStory = new UserStory(req.body);
    await userStory.save();
    res.send(userStory);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/get-user-stories", async (req, res) => {
  try {
    const userStory = await UserStory.find({});
    res.send(userStory);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/update-user-story", async (req, res) => {
  try {
    console.log("tem with project", req.body);
    const usersWithTeam = await UserStory.deleteMany({
      projectName: { $in: req.body },
    });
    if (usersWithTeam) {
      res.send(usersWithTeam);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

