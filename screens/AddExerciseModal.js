import React from "react";
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

export default function AddExerciseModal({ visible, onClose }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <SafeAreaView style={styles.modalSafeArea}>
        <View style={styles.exerciseModal}>
          <View style={styles.exerciseModalHeader}>
            <TouchableOpacity onPress={onClose}>
              <Feather name="x" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.exerciseModalAdd}> Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.searchBarContainer}>
            <TextInput style={styles.exerciseModalSearchBar} placeholder="Search" />
            <TouchableOpacity style={styles.filterButton}>
              <Feather name="filter" size={24} color="black" />
            </TouchableOpacity>
          </View>
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
    height: "90%",
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
    marginTop: 20,
  },
});
