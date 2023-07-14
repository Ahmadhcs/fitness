import User from "../models/user";

exports.createWorkout = async (req, res) => {
  try {
    const { workoutName, userId } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.workouts.push(workoutName);

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
