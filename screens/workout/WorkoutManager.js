import React, { useState } from "react";
import Workout from "./Workout";
import AddWorkout from "./AddWorkout";
import AddExerciseModal from "./AddExerciseModal";
import CategoryModal from "./CategoryModal";
import WorkoutView from "./WorkoutView";

export default function WorkoutManager() {
  // State management for the visibility of each component
  const [workoutVisible, setWorkoutVisible] = useState(true);
  const [addWorkoutVisible, setAddWorkoutVisible] = useState(false);
  const [addExerciseModalVisible, setAddExerciseModalVisible] = useState(false);
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [workoutViewVisible, setWorkoutViewVisible] = useState(false);

  // State management for the workout boxes in the Workout component
  const [newBoxes, setNewBoxes] = useState([]);

  // A function that manages the navigation between components.
  // It takes the current component and the target component as parameters and sets their visibility accordingly.
  const handleNavigate = (current, target) => {
    switch (current) {
      case "workout":
        setWorkoutVisible(false);
        break;
      case "addWorkout":
        setAddWorkoutVisible(false);
        break;
      case "exerciseModal":
        setAddExerciseModalVisible(false);
        break;
      case "categoryModal":
        setCategoryModalVisible(false);
        break;
      case "workoutView":
        setWorkoutViewVisible(false);
        break;
    }

    switch (target) {
      case "workout":
        setWorkoutVisible(true);
        break;
      case "addWorkout":
        setAddWorkoutVisible(true);
        break;
      case "exerciseModal":
        setAddExerciseModalVisible(true);
        break;
      case "categoryModal":
        setCategoryModalVisible(true);
        break;
      case "workoutView":
        setWorkoutViewVisible(true);
        break;
    }
  };

  // A function that adds new workout boxes to the Workout component
  const handleAddNewBox = (newBox) => {
    if (newBox) {
      setNewBoxes((prevBoxes) => [...prevBoxes, newBox]);
    }
  };

  return (
    <>
      {workoutVisible && <Workout newBoxes={newBoxes} navigate={handleNavigate} />}

      {addWorkoutVisible && (
        <AddWorkout navigate={handleNavigate} onAddNewBox={handleAddNewBox} />
      )}

      {addExerciseModalVisible && (
        <AddExerciseModal visible={addExerciseModalVisible} navigate={handleNavigate} />
      )}

      {categoryModalVisible && (
        <CategoryModal visible={categoryModalVisible} navigate={handleNavigate} />
      )}

      {workoutViewVisible && <WorkoutView boxName={newBoxes} navigate={handleNavigate} />}
    </>
  );
}
