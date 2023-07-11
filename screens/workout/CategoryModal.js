import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import axios from "axios";

export default function CategoryModal({
  visible,
  navigate,
  selectedCategory,
  onAddExercise,
}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedCategory}`,
          {
            headers: {
              "x-rapidapi-key": "da649500b0mshb1e7de48cddfd80p1378b5jsnb0aa765842fe",
              "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedCategory]);
  console.log;

  // Function to close the CategoryModal
  const handleCloseModal = () => {
    navigate("categoryModal", "exerciseModal");
  };

  const handleExerciseSelect = (item) => {
    onAddExercise(item);
    navigate("categoryModal", "addWorkout");
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={handleCloseModal}>
      <SafeAreaView style={styles.modalSafeArea}>
        <View style={styles.exerciseModal}>
          <View style={styles.exerciseModalHeader}>
            <TouchableOpacity style={styles.backButton} onPress={handleCloseModal}>
              <Feather name="x" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleExerciseSelect(item)}>
                <Text style={styles.exerciseName}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalSafeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  exerciseModal: {
    width: "90%",
    height: "95%",
    borderRadius: 14,
    backgroundColor: "#fff",
    padding: 20,
  },
  exerciseModalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
    backgroundColor: "gray",
    borderRadius: 5,
  },
  exerciseName: {
    fontSize: 16,
    marginBottom: 10,
  },
});
