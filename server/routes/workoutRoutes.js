const express = require("express");
const router = express.Router();
const WorkoutController = require("../controllers/workoutController");

router.post("/workouts", WorkoutController.createWorkout);
router.delete("/workouts", WorkoutController.deleteWorkout);

module.exports = router;
