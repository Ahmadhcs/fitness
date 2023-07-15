import mongoose from "mongoose";
const { Schema } = mongoose;

const workoutSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  workoutName: {
    type: String,
    required: true,
  },
  exercises: [
    {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      sets: [
        {
          reps: {
            type: Number,
            required: true,
          },
          // store only the highest weight
          weight: {
            type: Number,
          },
        },
      ],
    },
  ],
});

export default mongoose.model("Workout", workoutSchema);
