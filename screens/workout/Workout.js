import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../../components/Navbar";
import Boxes from "../../components/Box";
import LogButton from "../../components/LogButton"; //Added thus
import Calendar from "../../components/CalendarContainer"; //added this

// newBoxes is imported from workoutmanager to render number of boxes
// this page navigates to 3 modals, calendarModal, workoutSplitModal, and workoutView, and to page Add Workout and GeneratedWorkout
function Workout({ newBoxes, navigate, deleteBox, calendarModalVisible }) {
  const navigation = useNavigation();
  const boxes = useMemo(() => newBoxes, [newBoxes]);

  const handleGoToGeneratedWorkout = () => {
    navigation.navigate("Loading");
  };

  // WorkoutView is Modal should be handled by WorkoutManager
  const handleGoToWorkoutView = (boxName) => {
    navigate("workout", "workoutView", null, null, boxName);
  };

  // Calendar is a Modal should be handled by WorkoutManager
  const handleGoToCalendar = () => {
    navigate("workout", "calendarModal");
  };

  // WorkoutSplit is Modal should be handled by WorkoutManager
  const handleGoToWorkoutSplit = () => {
    navigate("workout", "workoutSplitModal");
  };

  //brought this back, edited the log component so that it accepts a onPress prop adn then passed this down
  const handleGoToAddWorkout = () => {
    navigate("workout", "addWorkout");
  };

  return (
    <View style={styles.outerView}>
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
          <Calendar
            handleGoToCalendar={handleGoToCalendar}
            calendarModalVisible={calendarModalVisible}
          />
          <View style={styles.listContainer}>
            <Boxes
              newBoxes={boxes}
              handleGoToWorkoutView={handleGoToWorkoutView}
              deleteBox={deleteBox}
            />
            <TouchableOpacity
              style={styles.aiButton}
              onPress={handleGoToGeneratedWorkout}>
              <Text style={styles.aiButtonText}>Generate a Workout</Text>
            </TouchableOpacity>
            <View style={{ height: 100 }} />
          </View>
        </SafeAreaView>
      </ScrollView>
      <LogButton onPress={handleGoToAddWorkout} />
      <Navbar />
    </View>
  );
}

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
  pfp: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    marginLeft: 50,
  },
  editButton: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 10,
    elevation: 2,
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
  aiButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Workout;
