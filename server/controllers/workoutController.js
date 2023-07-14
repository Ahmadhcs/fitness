import Workout from "../models/Workout";

// Get all workouts
exports.getAllWorkouts = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId).populate("workouts");
    res.status(200).json(user.workouts);
  } catch (error) {
    res.status(500).send(error);
  }
};

// I think that this method is unsecure and that in the future we need to get the user's id from a JWT
// Create a new workout
// Create a new workout
exports.createWorkout = async (req, res) => {
  try {
    // Here you should replace the spreading of the req.body with the specific fields
    const workout = new Workout({
      workoutName: req.body.workoutName,
      user: req.body.userId,
    });

    await workout.save();
    console.log("Workout saved:", workout);

    // Fetch the user and update their workouts array
    const user = await User.findById(req.body.userId);
    console.log("Fetched user:", user);

    if (!user) {
      console.log("User not found:", req.body.userId);
      return res.status(404).json({ error: "User not found" });
    }

    user.workouts.push(workout._id);
    await user.save();
    console.log("Updated user:", user);

    res.status(201).json(workout);
  } catch (error) {
    console.error("Error in createWorkout:", error);
    res.status(500).send(error);
  }
};

exports.deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);

    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    // Fetch the user and update their workouts array
    const user = await User.findById(req.body.userId);
    user.workouts.pull(workout._id);
    await user.save();

    await workout.remove();
    res.status(200).json({ message: "Workout deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
