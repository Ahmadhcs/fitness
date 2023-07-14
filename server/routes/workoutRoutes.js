const express = require("express");
const router = express.Router();
const WorkoutController = require("../controllers/workoutController");

router.post("/workouts", WorkoutController.createWorkout);
router.get("/workouts", WorkoutController.getAllWorkouts);

module.exports = router;
