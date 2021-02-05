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

    //Virtuals for adding total duration of workout
    //docs for virtual  https://mongoosejs.com/docs/tutorials/virtuals.html#virtuals-in-json
}, { toJSON: { virtuals: true } });


// total workout duration use mongoose docs
workoutDB.virtual("totalDuration").get(function () {
    //using reduce to flatten the total durations to one value
    // docs for reduce https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
})

const Workout = mongoose.model("Workout", workoutDB);

module.exports = Workout;