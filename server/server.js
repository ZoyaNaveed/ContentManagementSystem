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
