const fetch = require("node-fetch");
const express = require("express");
const cors = require("cors");
const postRoute = require("./Routes/postRoute");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    helloWorld: true,
  });
});

app.use("/codedamn", postRoute);

app.get("*", (req, res) => {
  res.json({
    404: true,
  });
});

app.listen(1338, () => {
  console.log("Server listening on port 1338");
});
