import React, { useState, useEffect } from "react";
import Workout from "./Workout";
import WorkoutView from "./WorkoutView";
import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function WorkoutManager() {
  // State management for the visibility of each component
  const [workoutVisible, setWorkoutVisible] = useState(true);
  const [workoutViewVisible, setWorkoutViewVisible] = useState(false);
  const [workoutSplitModalVisible, setWorkoutSplitModalVisible] = useState(false);
  const [userId, setUserId] = useState(null);

  const [boxName, setBoxName] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  const [workoutSplit, setWorkoutSplit] = useState({
    Sun: "Rest",
    Mon: "Rest",
    Tue: "Rest",
    Wed: "Rest",
    Thu: "Rest",
    Fri: "Rest",
    Sat: "Rest",
  });

  // State management for the workout boxes in the Workout component
  const [newBoxes, setNewBoxes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authDataString = await AsyncStorage.getItem("auth-rn");
        const authData = JSON.parse(authDataString);
        const userId = authData.user._id;
        const userWorkouts = authData.user.workouts;
        setUserId(userId);
        setNewBoxes(userWorkouts);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const deleteBox = async (index) => {
    const workoutToDelete = newBoxes[index];

    try {
      const response = await axios.delete(`http://localhost:8000/api/workouts`, {
        data: { workoutName: workoutToDelete, userId: userId },
      });

      if (response && response.status === 200) {
        setNewBoxes((prevBoxes) => prevBoxes.filter((_, i) => i !== index));
      }
    } catch (error) {
      console.error("Error during the delete request:", error);
    }
  };

  const handleAddNewBox = (newBox) => {
    if (newBox) {
      fetch("http://localhost:8000/api/workouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          workoutName: newBox,
          userId: userId,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setNewBoxes((prevBoxes) => {
            const updatedBoxes = [...prevBoxes, data.workoutName];
            console.log(data);
            return updatedBoxes;
          });
          setWorkoutName("");
          setNotes("");
          setAddedExercises([]);
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  // A function that manages the navigation between components.
  // It takes the current component and the target component as parameters and sets their visibility accordingly.
  const handleNavigate = (current, target, boxName) => {
    switch (current) {
      case "workout":
        setWorkoutVisible(false);
        break;

      case "workoutView":
        setWorkoutViewVisible(false);
        break;
    }

    switch (target) {
      case "workout":
        setWorkoutVisible(true);
        break;
      case "workoutView":
        setWorkoutViewVisible(true);
        setBoxName(boxName);
        break;
    }
  };

  const handleUpdateSplit = (newSplit) => {
    setWorkoutSplit(newSplit);
    setWorkoutSplitModalVisible(false);
    setWorkoutVisible(true);
  };

  const handleAddExercise = (exercise) => {
    setAddedExercises((prevExercises) => [...prevExercises, exercise]);
  };

  return (
    <>
      {workoutVisible && (
        <Workout
          newBoxes={newBoxes}
          navigate={handleNavigate}
          onAddExercise={handleAddExercise}
          deleteBox={deleteBox}
        />
      )}

      {workoutViewVisible && <WorkoutView boxName={boxName} navigate={handleNavigate} />}
    </>
  );
}
