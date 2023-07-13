import React, { useMemo } from "react";
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
import LogButton from "../../components/LogButton";
import Calendar from "../../components/CalendarContainer";

// newBoxes is imported from workoutmanager to render number of boxes
// deletBox is exported to workoutmanager to notify to delete a box
// this page navigates to 3 modals, calendarModal, workoutSplitModal, and workoutView, and to page Add Workout and GeneratedWorkout
function Workout({ newBoxes, navigate, deleteBox, calendarModalVisible }) {
  const navigation = useNavigation();
  const boxes = useMemo(() => newBoxes, [newBoxes]);

  const handleGoToAddWorkout = () => {
    // should receive the workoutName and notes from AddWorkout
    navigation.navigate("addWorkout");
  };

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

  const onDeleteHandler = (index) => {
    deleteBox(index);
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
              <Text style={styles.buttonText}>Generate a Workout</Text>
            </TouchableOpacity>
            <View style={{ height: 100 }} />
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={styles.floatingButtonContainer}>
        <LogButton onPress={handleGoToAddWorkout} navigate={navigate} />
      </View>
      <Navbar />
    </View>
  );
}

// edit styles later to remove all the unused styles
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
    fontSize: 32,
    fontWeight: "bold",
    marginLeft: 50,
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
  deleteBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Workout;
