const express = require("express");
const mongoose = require("mongoose");

const Details = require("./model");

const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://avinash:LE9e9K7eKwrmFGyA@cluster0.istpydn.mongodb.net/clientdetails",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connect"))
  .catch((err) => console.log(err));

app.post("/addclientdetails", async (req, res) => {
  const { firstName, email, number, message } = req.body;

  try {
    const client = new Details({ firstName, email, number, message });
    await client.save();
    res.json(await Details.find());
    res.send("posted");
  } catch (err) {
    console.log(err);
  }
});

app.get("/clientdetails", (req, res) => {
  Details.find({})
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.listen(4000, () => console.log("server connected"));
