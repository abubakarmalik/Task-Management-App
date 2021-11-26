const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Users = require("./model/users");
const Tasks = require("./model/tasks");
const { find } = require("./model/users");

const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors());

//db
mongoose
  .connect(
    "mongodb+srv://abubakar:03068816053@cluster0.tyw25.mongodb.net/taskapp?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

// login
app.post("/", async (req, res) => {
  const { email, password } = req.body;

  const userLogin = await Users.findOne({ email: email });
  if (userLogin) {
    console.log("email match");
    if (password === userLogin.password) {
      res.send({ message: "login sucess", user: userLogin });
      console.log("password match");
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } else {
    res.status(400).json({ error: "user not exist" });
    console.log("user not exist");
  }
});

//register
app.post("/register", (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  Users.findOne({ email: email }, (err, user) => {
    if (user) {
      res.status(400).json({ error: "user already exist" });
      res.send({ message: "user already exist" });
      console.log("Already exits");
    } else {
      const newUser = new User({ name, email, password });
      newUser.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Register sucessfull" });
        }
      });
    }
  });
});

// addtask
app.post("/addtask", (req, res) => {
  // console.log(req.body);
  const { title, date, description } = req.body;

  const task = new Tasks({ title, date, description });
  console.log("Add Task: " + task);
  task.save((err) => {
    if (err) {
      console.log("no");
      res.send(err);
    } else {
      console.log("Done");
      res.send({ message: "Added sucessfull" });
    }
  });
});

// getAllTask
app.get("/home", async (req, res) => {
  const getTaskData = await Tasks.find();
  console.log("all tasks " + getTaskData);
  return res.send(getTaskData);
});

// taskStatusUpdate
app.post("/updateState", async (req, res) => {
  const { id, togglestate } = req.body;
  console.log(id, togglestate);
  const updateState = await Tasks.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        status: togglestate,
      },
    },
    { new: true }
  );
  console.log("change : " + updateState);
});

// filter weekly
app.get("/week", async (req, res) => {
  var today = new Date();
  var week = new Date(new Date().setDate(new Date().getDate() + 6));
  console.log("end" + week);
  let start = today;
  let end = week;
  end.setHours(23, 59, 59);
  const result = await Tasks.find({
    date: { $gte: start, $lt: end },
  });
  console.log(result);
  return res.send(result);
});

// filter month
app.get("/month", async (req, res) => {
  var today = new Date();
  var month = new Date(new Date().setDate(new Date().getDate() + 29));
  console.log("end" + month);
  let start = today;
  let end = month;
  end.setHours(23, 59, 59);
  const result = await Tasks.find({
    date: { $gte: start, $lt: end },
  });
  console.log(result);
  return res.send(result);
});

//server
app.listen(5000, () => {
  console.log("Server connected at 5000 port");
});
