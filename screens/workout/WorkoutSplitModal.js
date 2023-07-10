import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Dialog from "react-native-dialog";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const WorkoutSplitModal = ({ visible, onModalClose, onSplitUpdate }) => {
  const [splits, setSplits] = useState({
    Sunday: "Rest",
    Monday: "Rest",
    Tuesday: "Rest",
    Wednesday: "Rest",
    Thursday: "Rest",
    Friday: "Rest",
    Saturday: "Rest",
  });

  const [dialogVisible, setDialogVisible] = useState(false);
  const [currentDay, setCurrentDay] = useState(null);
  const [currentSplit, setCurrentSplit] = useState("");

  const handleSplitChange = (day) => {
    setCurrentDay(day);
    setCurrentSplit(splits[day] || "");
    setDialogVisible(true);
  };

  const handleSplitUpdate = () => {
    onSplitUpdate(splits);
    onModalClose();
  };

  const handleDialogClose = () => {
    setSplits((prev) => ({ ...prev, [currentDay]: currentSplit }));
    setDialogVisible(false);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onModalClose}>
      <View style={styles.modalView}>
        {days.map((day) => (
          <TouchableOpacity key={day} onPress={() => handleSplitChange(day)}>
            <Text style={styles.day}>
              {day}: {splits[day] || "Not set"}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.saveButton} onPress={handleSplitUpdate}>
          <Text style={styles.saveText}>Save Split</Text>
        </TouchableOpacity>
        <Dialog.Container visible={dialogVisible}>
          <Dialog.Title>Enter workout split for {currentDay}</Dialog.Title>
          <Dialog.Input value={currentSplit} onChangeText={setCurrentSplit} />
          <Dialog.Button label="Cancel" onPress={() => setDialogVisible(false)} />
          <Dialog.Button label="OK" onPress={handleDialogClose} />
        </Dialog.Container>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  day: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 5,
    width: 200,
    textAlign: "center",
  },
  saveButton: {
    backgroundColor: "#5067FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  saveText: {
    color: "#FFF",
  },
});

export default WorkoutSplitModal;
