const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const dotenv = require('dotenv');

dotenv.config({path:'config.env'})
const PORT = 8080;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
mongoose.connect('mongodb+srv://melvin:M0ng0sux123@cluster0.agyb2.mongodb.net/Budget?retryWrites=true&w=majority' || 8080, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

mongoose.connection
  .once('open', () => console.log('Connected To Mongo'))
  .on('error', (err) => {
    console.log('Error', err);
  })

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});