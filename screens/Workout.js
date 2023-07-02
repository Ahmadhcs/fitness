import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
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
import { style } from "d3";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const days = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];

const WorkoutTrackingStack = createStackNavigator();

// Separate component for each workout page
function WorkoutPage({ route, navigation }) {
  const { workoutType } = route.params;
  return (
    <View style={styles.workoutContainer}>
      <Text style={styles.workoutText}>This is the {workoutType} page</Text>
    </View>
  );
}

function WorkoutTracking({ navigation }) {
  const today = new Date();
  const currentDay = today.getDay();
  const nextDays = Array(7)
    .fill()
    .map((_, i) => days[(currentDay + i) % 7]);

  const workoutList = ["Push", "Pull", "Legs", "Misc"];

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
        {workoutList.map((workout, index) => (
          <TouchableOpacity
            key={index}
            style={styles.boxContainer}
            onPress={() => navigation.navigate("WorkoutPage", { workoutType: workout })}>
            <Text style={styles.boxText}>{workout}</Text>
          </TouchableOpacity>
        ))}
      </View>
     </SafeAreaView>
  );
}

export default function WorkoutTrackingNavigator() {
  return (
    <WorkoutTrackingStack.Navigator initialRouteName="WorkoutTracking">
      <WorkoutTrackingStack.Screen
        name="WorkoutTracking"
        component={WorkoutTracking}
        options={{ headerShown: false }}
      />
      <WorkoutTrackingStack.Screen name="WorkoutPage" component={WorkoutPage} />
    </WorkoutTrackingStack.Navigator>
  );
}

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
    width: "80%",
    height: "80%",
    maxWidth: "80%",
    maxHeight: screenWidth * 0.8,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
  },
  boxContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    width: "45%",
    aspectRatio: 1,
    margin: "2%",
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
});
