const path = require("path");

const route = require("express").Router();


//home route
route.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"), err => {
        if (err) throw err;
    });
});

//exercise route
route.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"), err => {
        if (err) throw err;
    });
});

// stats route
route.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"), err => {
        if (err) throw err;
    });
});

module.exports = route;