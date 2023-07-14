import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 64,
  },
  gender: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  heightUnit: {
    type: Boolean,
    required: true,
  },
  weightUnit: {
    type: Boolean,
    required: true,
  },
  weightHistory: [
    {
      weight: {
        type: Number,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      age:{
        type: Number, 
        required: true
      },
      heightUnit:{
        type: Boolean, 
        required: true
      },
      weightUnit:{
        type: Boolean, 
        required: true
      },
      weightHistory: [{
        weight: {
          type: Number,
          required: true,
        },
        date: {
          type: String,
          required: true,
        },
      }],
      dailyFood: [{
        servingAmount: {
            type: Number,
            required: true
        },
        protein:{
            type: Number,
            required: true
        },
        carbs:{
            type: Number, 
            required: true
        },
        fats:{
            type: Number,
            required: true
        },
        calories:{
            type: Number,
            required: true
        },
        foodName: {
            type: String, 
            required: true 
        }
           
    }]
    },
  ],
  workouts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workout",
    },
  ],
});

export default mongoose.model("User", userSchema);
