import React, { useState } from "react";
import Workout from "./Workout";
import AddWorkout from "./AddWorkout";
import AddExerciseModal from "./AddExerciseModal";
import CategoryModal from "./CategoryModal";
import WorkoutView from "./WorkoutView";
import CalendarModal from "./CalendarModal";
import WorkoutSplitModal from "./WorkoutSplitModal";
import ExerciseCard from "../../components/ExerciseCard";

export default function WorkoutManager() {
  // State management for the visibility of each component
  const [workoutVisible, setWorkoutVisible] = useState(true);
  const [addWorkoutVisible, setAddWorkoutVisible] = useState(false);
  const [addExerciseModalVisible, setAddExerciseModalVisible] = useState(false);
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [workoutViewVisible, setWorkoutViewVisible] = useState(false);
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);
  const [workoutSplitModalVisible, setWorkoutSplitModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [workoutName, setWorkoutName] = useState("");
  const [notes, setNotes] = useState("");

  const [workoutSplit, setWorkoutSplit] = useState({
    Sun: "Rest",
    Mon: "Rest",
    Tue: "Rest",
    Wed: "Rest",
    Thu: "Rest",
    Fri: "Rest",
    Sat: "Rest",
  });

  const [addedExercises, setAddedExercises] = useState([]);

  // State management for the workout boxes in the Workout component
  const [newBoxes, setNewBoxes] = useState([]);

  // A function that manages the navigation between components.
  // It takes the current component and the target component as parameters and sets their visibility accordingly.
  const handleNavigate = (current, target, day, category) => {
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
      case "calendarModal":
        setCalendarModalVisible(false);
        break;
      case "workoutSplitModal":
        setWorkoutSplitModalVisible(false);
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
        setSelectedCategory(category);
        break;
      case "workoutView":
        setWorkoutViewVisible(true);
        break;
      case "calendarModal":
        setCalendarModalVisible(true);
        setWorkoutVisible(true);
        setSelectedDay(day);
        break;
      case "workoutSplitModal":
        setWorkoutSplitModalVisible(true);
        break;
    }
  };

  // A function that adds new workout boxes to the Workout component
  const handleAddNewBox = (newBox) => {
    if (newBox) {
      setNewBoxes((prevBoxes) => [...prevBoxes, newBox]);
    }
    setWorkoutName("");
    setNotes("");
    setAddedExercises([]);
  };

  const handleUpdateSplit = (newSplit) => {
    setWorkoutSplit(newSplit);
    setWorkoutSplitModalVisible(false);
    setWorkoutVisible(true);
  };

  const handleAddExercise = (exercise) => {
    setAddedExercises((prevExercises) => [...prevExercises, exercise]);
  };

  const handleDeleteWorkout = () => {
    setModalVisible(false);
    setWorkoutName("");
    setNotes("");
    setAddedExercises([]);
  };

  const handleWorkoutNameChange = (name) => {
    setWorkoutName(name);
  };

  const handleNotesChange = (notes) => {
    setNotes(notes);
  };

  return (
    <>
      {workoutVisible && (
        <Workout
          newBoxes={newBoxes}
          navigate={handleNavigate}
          workoutSplit={workoutSplit}
          onAddExercise={handleAddExercise}
        />
      )}
      {addWorkoutVisible && (
        <AddWorkout
          navigate={handleNavigate}
          onAddNewBox={handleAddNewBox}
          exercises={addedExercises}
          onDeleteWorkout={handleDeleteWorkout}
          workoutName={workoutName}
          onWorkoutNameChange={handleWorkoutNameChange}
          notes={notes}
          onNotesChange={handleNotesChange}
        />
      )}
      {addExerciseModalVisible && (
        <AddExerciseModal visible={addExerciseModalVisible} navigate={handleNavigate} />
      )}
      {categoryModalVisible && (
        <CategoryModal
          visible={categoryModalVisible}
          navigate={handleNavigate}
          selectedCategory={selectedCategory}
          onAddExercise={handleAddExercise}
        />
      )}
      {workoutViewVisible && <WorkoutView boxName={newBoxes} navigate={handleNavigate} />}
      <CalendarModal
        visible={calendarModalVisible}
        onModalClose={() => handleNavigate("calendarModal", "workout")}
        selectedDay={selectedDay}
        workoutSplit={workoutSplit}
      />
      <WorkoutSplitModal
        visible={workoutSplitModalVisible}
        onModalClose={() => handleNavigate("workoutSplitModal", "workout")}
        onSplitUpdate={handleUpdateSplit}
      />
    </>
  );
}
