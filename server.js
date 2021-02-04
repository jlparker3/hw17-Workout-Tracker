//dependencies
const express = require("express");
const mongoose = require("mongoose");



//setting up express
const app = express();
const PORT = process.env.PORT || 8080;

//setting up express to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

// since we are deploying this to heroku this will change
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

//require models
const db = require ("./models");

//require routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`);
})