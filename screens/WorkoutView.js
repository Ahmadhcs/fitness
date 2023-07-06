import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

function NewPage({ route, navigation }) {
  const { boxName } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleExport = () => {
    //  Export functionality here
  };

  const handleAddExercise = () => {
    // Navigate to the AddExercise screen
  };

  const handleStartWorkout = () => {
    // Start workout functionality here
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
      <ScrollView style={styles.scrollView}>
        {[1, 2].map((item, index) => (
          <View key={index} style={styles.exerciseBox}>
            <Text style={styles.exerciseName}>Exercise Name</Text>
            <View style={styles.detailsContainer}>
              <View style={styles.detailBox}>
                <Text>Sets</Text>
                <TouchableOpacity style={styles.infoBox}>
                  <Text>Info</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.detailBox}>
                <Text>Reps</Text>
                <TouchableOpacity style={styles.infoBox}>
                  <Text>Info</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.detailBox}>
                <Text>Previous</Text>
                <TouchableOpacity style={styles.infoBox}>
                  <Text>Info</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.addExerciseButton} onPress={handleAddExercise}>
        <Text style={styles.buttonText}>Add Exercise</Text>
      </TouchableOpacity>
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
  },
  scrollView: {
    marginBottom: 20,
  },
  exerciseBox: {
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#eeeeee",
    marginBottom: 20,
  },
  exerciseName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  detailBox: {
    alignItems: "center",
  },
  infoBox: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddd",
    marginTop: 5,
    borderRadius: 5,
  },
  addExerciseButton: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: "blue",
    margin: 10,
    width: "90%",
    alignSelf: "center",
  },
  startWorkoutButton: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: "green",
    margin: 10,
    width: "90%",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default NewPage;
