const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const hotelData = require("./Data/hotelData.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hotel Data is Running");
});
app.get("/hotelData", (req, res) => {
  res.send(hotelData);
});

app.listen(port, () => {
  console.log(`Hotel API is Running on Port: ${port} `);
});
