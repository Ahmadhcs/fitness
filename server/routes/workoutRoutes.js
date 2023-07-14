const express = require("express");
const router = express.Router();
const WorkoutController = require("../controllers/workoutController");

router.post("/workouts", WorkoutController.createWorkout);
router.get("/workouts/:userId", WorkoutController.getAllWorkouts);
router.delete("/workouts/:id", WorkoutController.deleteWorkout);

module.exports = router;
