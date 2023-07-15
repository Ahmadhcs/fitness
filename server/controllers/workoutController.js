import User from "../models/user";
import Workout from "../models/workout";

exports.createWorkout = async (req, res) => {
  try {
    const { workoutName, userId, exercises } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const workout = new Workout({
      user: userId,
      workoutName,
      exercises,
    });

    await workout.save();

    user.workouts.push(workout._id);

    await user.save();

    res.status(201).json({ workoutName });
  } catch (error) {
    console.error("Error in createWorkout:", error);
    res.status(500).send(error);
  }
};

exports.deleteWorkout = async (req, res) => {
  try {
    const { workoutName, userId } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.workouts = user.workouts.filter((workout) => workout !== workoutName);

    // Save the updated user
    await user.save();

    res.status(200).json({ message: "Workout deleted" });
  } catch (error) {
    console.error("Error in deleteWorkout:", error);
    res.status(500).send(error);
  }
};

exports.getWorkout = async (req, res) => {
  try {
    const { id: workoutId } = req.params;
    const workout = await Workout.findById(workoutId).populate("user");

    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    res.status(200).json(workout);
  } catch (error) {
    console.error("Error in getWorkout:", error);
    res.status(500).send(error);
  }
};
