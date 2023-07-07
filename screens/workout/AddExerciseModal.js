import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function AddExerciseModal({ visible, navigate }) {
  const [searchText, setSearchText] = useState("");
  const categories = ["Chest", "Triceps", "Biceps", "Back", "Shoulders", "Legs", "Abs"];

  // Function to handle the opening of Category Modal
  const handleOpenCategoryModal = () => {
    navigate("exerciseModal", "categoryModal");
  };

  return (
    <>
      <Modal
        animationType="none"
        transparent={true}
        visible={visible}
        onRequestClose={() => navigate("exerciseModal", "addWorkout")}>
        <SafeAreaView style={styles.modalSafeArea}>
          <View style={styles.exerciseModal}>
            <View style={styles.exerciseModalHeader}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigate("exerciseModal", "addWorkout")}>
                <Feather name="x" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  /* Implement logic for the Add button */
                }}>
                <Text style={styles.exerciseModalAdd}> Add </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.searchBarContainer}>
              <TextInput
                style={styles.exerciseModalSearchBar}
                placeholder="Search"
                onChangeText={setSearchText}
                value={searchText}
              />
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterButtonText}> Filter </Text>
              </TouchableOpacity>
            </View>
            {/* If no search text has been entered, show the recent exercises section */}
            {!searchText && (
              <>
                <Text style={styles.recentSection}> Recent exercises </Text>
                <TouchableOpacity style={styles.exerciseButton}>
                  {/* Hardcoded for now */}
                  <Text style={styles.exerciseButtonText}> Bench Press </Text>
                </TouchableOpacity>
                <View style={styles.separator} />
              </>
            )}
            {categories.map((category, index) => (
              <View key={category} style={{ width: "100%" }}>
                <TouchableOpacity
                  style={styles.categoryButton}
                  onPress={handleOpenCategoryModal}>
                  <Text style={styles.categoryButtonText}>{category}</Text>
                  <Text style={styles.arrow}>{">"}</Text>
                </TouchableOpacity>
                {/* If this is not the last category in the array, add a line */}
                {index < categories.length - 1 && <View style={styles.separator} />}
              </View>
            ))}
          </View>
        </SafeAreaView>
      </Modal>
    </>
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  exerciseModalAdd: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  exerciseModalSearchBar: {
    height: 40,
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginTop: 20,
    marginRight: 10,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginTop: 20,
    backgroundColor: "gray",
  },
  filterButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  recentSection: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  exerciseButton: {
    marginTop: 10,
  },
  exerciseButtonText: {
    fontSize: 18,
  },
  separator: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  categoryButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 0,
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  categoryButtonText: {
    fontSize: 20,
  },
  arrow: {
    fontSize: 20,
  },
});
