require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./db/connect");
const router = require("./Routers/router");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/HackedIn/v1", router);
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server listening at port ${port}`));
  } catch (error) {
    console.error(error);
  }
};

start();
