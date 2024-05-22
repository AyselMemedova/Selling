const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const sellingSchema = mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  description: String,
  count: Number,
  totalPrice: Number,
});

const selling = mongoose.model("selling", sellingSchema);

app.get("/api/selling", async (req, res) => {
  const resp = await selling.find();
  res.send(resp);
});

app.post("/api/selling", async (req, res) => {
  const { title, price, image,description, count, totalPrice } = req.body;
  const newSelling = new selling({
    title: title,
    price: price,
    image: image,
    description: description,
    count: count,
    totalPrice: totalPrice,
  });
  await newSelling.save();
  res.send("item elave olundu");
});

app.put("/api/selling/:id", async (req, res) => {
  const { id } = req.params;
  const resp = await selling.findByIdAndUpdate(id, { ...req.body });
  res.send("updated");
});

app.delete("/api/selling/:id", async (req, res) => {
  const { id } = req.params;
  const resp = await selling.findByIdAndDelete(id, { ...req.body });
  await newSelling.save();
  res.send("delete");
});

app.listen(process.env.PORT, (req, res) => {
  console.log(" api running");
});
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then((resp) => {
    console.log("db connected");
  })
  .catch((error) => {
    console.log("db not connected");
  });
