import React, { useState, useEffect } from "react";
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
import { createStackNavigator } from "@react-navigation/stack";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const days = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];

const WorkoutTrackingStack = createStackNavigator();

function WorkoutPage({ route, navigation }) {
  const { workoutType } = route.params;
  return (
    <View style={styles.workoutContainer}>
      <Text style={styles.workoutText}>This is the {workoutType} page</Text>
    </View>
  );
}

function AddBoxButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
      <Feather name="plus" size={30} color="#FFF" />
    </TouchableOpacity>
  );
}

function WorkoutTracking({ navigation, route, showNavbar = true }) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedDay, setSelectedDay] = React.useState(null);
  const [boxes, setBoxes] = useState([]);

  const { newBox } = route.params ?? {};
  useEffect(() => {
    if (newBox) {
      setBoxes((prevBoxes) => [...prevBoxes, newBox]);
    }
  }, [newBox]);

  const today = new Date();
  const currentDay = today.getDay();
  const prevTwoDays = [days[(currentDay - 2 + 7) % 7], days[(currentDay - 1 + 7) % 7]];
  const nextDays = [
    ...prevTwoDays,
    days[(currentDay + 7) % 7],
    days[(currentDay + 1) % 7],
    days[(currentDay + 2) % 7],
    days[(currentDay + 3) % 7],
    days[(currentDay + 4) % 7],
  ];

  const addBox = () => {
    // setBoxes((prevBoxes) => [...prevBoxes, `New Box ${prevBoxes.length + 1}`]);
    navigation.navigate("AddWorkout", { showNavbar: false });
  };

  return (
    <View style={styles.outerView}>
      <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <Modal animationType="fade" transparent={true} visible={modalVisible}>
            <View style={styles.modalOverlay}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>{selectedDay}</Text>
                <TouchableOpacity
                  style={styles.buttonClose}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </TouchableWithoutFeedback>
        <ScrollView style={styles.scrollView}>
          <SafeAreaView style={styles.container}>
            <View style={styles.header}>
              <Image style={styles.pfp} source={require("../images/cole.jpeg")} />
              <Text style={styles.headerText}>My Workout</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => {
                  console.log("Edit Button Pressed!");
                }}>
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
                      setSelectedDay(day);
                      setModalVisible(true);
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
                <TouchableOpacity
                  key={index}
                  style={
                    boxes.length % 2 !== 0 && index === boxes.length - 1
                      ? styles.aiBoxContainer
                      : styles.boxContainer
                  }
                  onPress={() =>
                    navigation.navigate("WorkoutView", { workoutType: box })
                  }>
                  <Text style={styles.boxText}>{box}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity
                style={styles.aiButton}
                onPress={() => {
                  console.log("ai Button Pressed!");
                }}>
                <Text style={styles.buttonText}>Generate a Workout</Text>
              </TouchableOpacity>
              <View style={{ height: 10 }} />
            </View>
          </SafeAreaView>
        </ScrollView>
        {showNavbar && (
          <View style={styles.floatingButtonContainer}>
            <AddBoxButton onPress={addBox} />
          </View>
        )}
      </>
    </View>
  );
}

export default WorkoutTracking;

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
  boxContainer: {
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
  aiBoxContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    width: "96%",
    aspectRatio: 2,
    margin: "2%",
    borderRadius: 12,
  },
});
