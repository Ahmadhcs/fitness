import React, { useState, useEffect } from "react";
import Workout from "./Workout";
import AddWorkout from "./AddWorkout";
import AddExerciseModal from "./AddExerciseModal";
import CategoryModal from "./CategoryModal";
import WorkoutView from "./WorkoutView";
import CalendarModal from "./CalendarModal";
import WorkoutSplitModal from "./WorkoutSplitModal";
import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";
import user from "../../server/models/user";

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
  const [userId, setUserId] = useState(null);
  const [workoutIds, setWorkoutIds] = useState([]);

  const [boxName, setBoxName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [workoutName, setWorkoutName] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authDataString = await AsyncStorage.getItem("auth-rn");
        const authData = JSON.parse(authDataString);
        const userId = authData.user._id;
        const userWorkoutIds = authData.user.workouts;

        const workoutsPromises = userWorkoutIds.map((userWorkoutIds) =>
          axios.get(`http://localhost:8000/api/workouts/${userWorkoutIds}`)
        );
        const workoutResponses = await Promise.all(workoutsPromises);
        const userWorkouts = workoutResponses.map((res) => res.data.workoutName);
        setUserId(userId);
        setNewBoxes(userWorkouts);
        setWorkoutIds(userWorkoutIds);
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
          workoutName: workoutName,
          userId: userId,
          exercises: addedExercises,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Response data:", data);
          setNewBoxes((prevBoxes) => {
            const updatedBoxes = [...prevBoxes, data.workoutName];
            return updatedBoxes;
          });
          setWorkoutName("");
          setNotes("");
          setExercises([]);
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  // A function that manages the navigation between components.
  // It takes the current component and the target component as parameters and sets their visibility accordingly.
  const handleNavigate = (current, target, day, category, boxName) => {
    const workoutId = workoutIds[newBoxes.indexOf(boxName)];
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
        setBoxName(boxName);
        setSelectedWorkoutId(workoutId);
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
          onAddExercise={handleAddExercise}
          deleteBox={deleteBox}
          calendarModalVisible={calendarModalVisible}
        />
      )}
      {addWorkoutVisible && (
        <AddWorkout
          navigate={handleNavigate}
          onAddNewBox={handleAddNewBox}
          exercises={addedExercises}
          setExercises={setAddedExercises}
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
      {workoutViewVisible && (
        <WorkoutView
          boxName={boxName}
          navigate={handleNavigate}
          workoutId={selectedWorkoutId}
        />
      )}
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
