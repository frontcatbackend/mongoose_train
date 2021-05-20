const express = require("express");
const port = 3000;
const cors = require("cors");
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017"
const router = require("./routes/index.router");

const app = express();

app.use(express.json())
app.use(cors());

app.use("/", router);

const start_server = async () => {
  try {
    mongoose.Promise = global.Promise;
    mongoose.connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    app.listen(port, () => console.log(`Server has been started on ${port}`));
  } catch (e) {
    console.log(e);
  }
};

start_server();
