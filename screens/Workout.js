import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import {ProgressBar} from '@react-native-community/progress-bar-android';
import { style } from "d3";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const days = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];

const WorkoutTracking = () => {
  const today = new Date();
  const currentDay = today.getDay();
  const nextDays = Array(7)
    .fill()
    .map((_, i) => days[(currentDay + i) % 7]);

  const workoutList = ["Push", "Pull", "Legs"];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Workout</Text>
        <Image style={styles.pfp} source={require("../images/cole.jpeg")} />
      </View>
      <View style={styles.calendarContainer}>
        <View style={styles.calendarLine} />
        <View style={styles.calendar}>
          {nextDays.map((day, index) => (
            <View key={index} style={[styles.day, index === 0 && styles.today]}>
              <Text style={styles.dayText}>{day}</Text>
            </View>
          ))}
        </View>
        <View style={styles.calendarLine} />
      </View>
      <View style={styles.listContainer}>
        <Ionicons
          style={styles.gearIcon}
          name="settings-outline"
          size={24}
          color="black"
        />
        {workoutList.map((workout, index) => (
          <TouchableOpacity key={index} style={styles.listItem}>
            <Text style={styles.listItemText}>{workout}</Text>
            <Text style={styles.arrowIcon}>{">"}</Text>
          </TouchableOpacity>
        ))}
      </View>
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingBottom: screenHeight * 0.02,
  },
  headerText: {
    fontSize: screenWidth * 0.08,
    fontWeight: "bold",
  },
  pfp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: screenWidth * 0.325,
  },
  calendarContainer: {
    paddingVertical: 10,
  },
  calendarLine: {
    borderBottomWidth: 1,
    borderColor: "#000",
  },
  calendar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  day: {
    width: screenWidth / 8,
    height: screenWidth / 8,
    borderRadius: screenWidth / 8,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  today: {
    backgroundColor: "blue",
  },
  dayText: {
    fontSize: screenWidth / 20,
    fontWeight: "bold",
  },
  listContainer: {
    paddingLeft: screenWidth * 0.05,
    paddingRight: screenWidth * 0.05,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#000",
  },
  gearIcon: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  listItemText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  arrowIcon: {
    fontSize: 18,
  },
});

export default WorkoutTracking;
