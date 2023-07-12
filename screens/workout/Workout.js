import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import Navbar from "../../components/Navbar";

// Constants for dimensions and weekdays
const screenWidth = Dimensions.get("window").width;
const days = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];

function FloatingButton({ onPress, navigate }) {
  return (
    <TouchableOpacity
      style={styles.floatingButton}
      onPress={() => {
        onPress();
        navigate("workout", "addWorkout"); // Direct navigation from WorkoutManager to AddWorkout
      }}>
      <Feather name="plus" size={30} color="#FFF" />
    </TouchableOpacity>
  );
}

// Main Workout component
function Workout({ newBoxes, navigate, workoutSplit }) {
  // Calculating the list of boxes only when newBoxes change
  const boxes = useMemo(() => newBoxes, [newBoxes]);

  // Handler for navigating to the AddWorkout page
  const handleGoToAddWorkout = () => {
    navigate("workout", "addWorkout");
  };

  const handleGoToWorkoutView = (boxName) => {
    navigate("workout", "workoutView", null, null, boxName);
  };

  const handleGoToWorkoutSplit = () => {
    navigate("workout", "workoutSplitModal");
  };

  // Creating a new Date object for today's date
  const today = new Date();
  // Using getDay method to get the current day of the week as a number (0-6, where 0 is Sunday)
  const currentDay = today.getDay();
  // Calculating the previous two days based on the current day. The "+ 7" and "% 7" operations ensure the day number always stays within the 0-6 range.
  const prevTwoDays = [days[(currentDay - 2 + 7) % 7], days[(currentDay - 1 + 7) % 7]];
  // Creating an array of the next few days. It includes the previous two days and the current day, then the four days after that.
  const nextDays = [
    ...prevTwoDays,
    days[(currentDay + 7) % 7],
    days[(currentDay + 1) % 7],
    days[(currentDay + 2) % 7],
    days[(currentDay + 3) % 7],
    days[(currentDay + 4) % 7],
  ];

  return (
    <View style={styles.outerView}>
      {/* Main Workout Page */}
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Image style={styles.pfp} source={require("../../images/cole.jpeg")} />
            <Text style={styles.headerText}>My Workout</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.editButton} onPress={handleGoToWorkoutSplit}>
              <Feather name="edit" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.calendarContainer}>
            <View style={styles.calendar}>
              {nextDays.map((day, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.day, index === 2 && styles.today]}
                  onPress={() => {
                    navigate("workout", "calendarModal", day);
                  }}>
                  <Text style={styles.dayText}>{day}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.listContainer}>
            {boxes.length === 0 && (
              <Text style={styles.noWorkoutsText}>
                You have no workouts, create a new template or generate one!
              </Text>
            )}
            {boxes.map((box, index) => (
              // For each 'box', a TouchableOpacity is rendered with a unique 'key' prop (for performance)
              <TouchableOpacity
                key={index}
                style={
                  boxes.length % 2 !== 0 && index === boxes.length - 1
                    ? styles.oddBoxContainer
                    : styles.evenBoxContainer
                }
                onPress={() => handleGoToWorkoutView(box)}>
                <Text style={styles.boxText}>{box}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.aiButton}>
              <Text style={styles.buttonText}>Generate a Workout</Text>
            </TouchableOpacity>
            <View style={{ height: 100 }} />
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={styles.floatingButtonContainer}>
        <FloatingButton onPress={handleGoToAddWorkout} navigate={navigate} />
      </View>
      <Navbar />
    </View>
  );
}

export default Workout;

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    justifyContent: "flex-start",
  },
  headerText: {
    fontSize: screenWidth * 0.08,
    fontWeight: "bold",
    marginLeft: screenWidth * 0.15,
  },
  pfp: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  calendarContainer: {
    paddingVertical: 10,
    marginTop: 30,
    alignItems: "center",
  },
  editButton: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 10,
    elevation: 2,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    marginHorizontal: 20,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  calendar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  today: {
    backgroundColor: "#5067FF",
  },
  dayText: {
    fontSize: screenWidth / 20,
    fontWeight: "bold",
  },
  listContainer: {
    width: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignSelf: "center",
    marginBottom: 10,
  },
  evenBoxContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    width: "46%",
    aspectRatio: 1,
    margin: "2%",
    borderRadius: 12,
  },
  boxText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  workoutContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  workoutText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  day: {
    width: screenWidth / 9,
    height: screenWidth / 9,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    margin: 5,
  },
  floatingButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  floatingButton: {
    backgroundColor: "#5067FF",
    borderRadius: 30,
    width: 60,
    height: 60,
    padding: 15,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    marginBottom: 100,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  aiButton: {
    backgroundColor: "#5067FF",
    borderRadius: 30,
    padding: 20,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    width: "96%",
    marginTop: 10,
  },
  oddBoxContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    width: "96%",
    aspectRatio: 2,
    margin: "2%",
    borderRadius: 12,
  },
});
