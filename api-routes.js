const router = require("express").Router();
const Workout = require("../models/workout.js");


//getting all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(dbWorkout => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            // If an error occurs, send the error to the client
            res.json(err);
        })

})


//creating new workout 
router.post("/api/workouts", (req, res) => {
    Workout.create(req)
        .then(dbWorkout => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            // If an error occurs, send the error to the client
            res.json(err);
        })
})


//updating existing workout 
router.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { exercises: req.body } }
    ).then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
        .catch(err => {
            // If an error occurs, send the error to the client
            res.json(err);
        })

})


//getting the chart data for the dashboard
router.get("/api/workouts/range", (req,res) => {
    Workout.find({})
    .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
        .catch(err => {
            // If an error occurs, send the error to the client
            res.json(err);
        })
})


module.exports = router;

