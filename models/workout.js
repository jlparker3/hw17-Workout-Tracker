const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutDB = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Field is required, enter an exercise type."
            },
            name: {
                type: String,
                trim: true,
                required: "Field is required, enter an exercise name."
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            //for cardio only
            distance: {
                type: Number
            },
            duration: {
                type: Number,
                required: "Field is required, enter duration of exercise."
            }

        }
    ]
})

const Workout = mongoose.model("Workout", workoutDB);

module.exports = Workout;