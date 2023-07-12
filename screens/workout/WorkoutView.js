import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import ExerciseCard from "../../components/ExerciseCard";

function WorkoutView({ boxName, navigate }) {
  const [exercises, setExercises] = useState([
    { id: 1, name: "Exercise 1", sets: [1, 2] },
    { id: 2, name: "Exercise 2", sets: [1, 2, 3] },
  ]);

  const handleGoBack = () => {
    navigate("workoutView", "workout");
  };

  const handleExport = () => {
    //  Export functionality here
  };

  const handleAddExercise = () => {
    navigate("workoutView", "exerciseModal");
  };

  const handleStartWorkout = () => {
    // Start workout functionality here
  };

  const handleDeleteSet = (exerciseId, setId) => {
    setExercises(
      exercises.map((exercise) => {
        if (exercise.id === exerciseId) {
          return { ...exercise, sets: exercise.sets.filter((set) => set !== setId) };
        }
        return exercise;
      })
    );
  };

  const handleAddSet = (exerciseId) => {
    setExercises(
      exercises.map((exercise) => {
        if (exercise.id === exerciseId) {
          return {
            ...exercise,
            sets: [...exercise.sets, Math.max(...exercise.sets) + 1],
          };
        }
        return exercise;
      })
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Your {boxName} Routine</Text>
        <TouchableOpacity onPress={handleExport}>
          <Feather name="download" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {exercises.map((exercise) => (
        <View key={exercise.id} style={styles.card}>
          <Text style={styles.cardTitle}>{exercise.name}</Text>
          {exercise.sets.map((setId) => (
            <ExerciseCard
              key={setId}
              data={`Set ${setId}`}
              onDelete={() => handleDeleteSet(exercise.id, setId)}
            />
          ))}
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleAddSet(exercise.id)}>
            <Text style={styles.addButtonText}>Add Set</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity style={styles.startWorkoutButton} onPress={handleStartWorkout}>
        <Text style={styles.buttonText}>Start Workout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#2a2727",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
  },
  card: {
    backgroundColor: "#000",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  addButton: {
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 1,
    marginTop: 10,
  },
  addButtonText: {
    color: "#fff",
  },
  startWorkoutButton: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: "green",
    margin: 10,
    width: "90%",
    alignSelf: "center",
    marginBottom: 150,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default WorkoutView;
