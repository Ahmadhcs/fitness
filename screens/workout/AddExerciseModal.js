import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const categories = [
  "Chest",
  "Back",
  "Legs",
  "Arms",
  "Shoulders",
  "Abs",
  "Cardio",
  "Other",
];

export default function AddExerciseModal({ visible, navigate }) {
  // Function to handle the opening of Category Modal
  const handleOpenCategoryModal = (category) => {
    navigate("exerciseModal", "categoryModal", "", category.toLowerCase());
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={() => navigate("exerciseModal", "addWorkout")}>
      <SafeAreaView style={styles.modalSafeArea}>
        <View style={styles.exerciseModal}>
          <ScrollView>
            <View style={styles.exerciseModalHeader}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigate("exerciseModal", "addWorkout")}>
                <Feather name="x" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.listContainer}>
              {categories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.boxContainer}
                  onPress={() => handleOpenCategoryModal(category)}>
                  <Text style={styles.boxText}>{category}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
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
  backButton: {
    padding: 10,
    marginLeft: 0,
    backgroundColor: "gray",
    borderRadius: 5,
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
    justifyContent: "flex-start",
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  boxContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    width: "45%",
    height: "45%",
    aspectRatio: 1,
    margin: "2.5%",
    borderRadius: 12,
  },
  boxText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
