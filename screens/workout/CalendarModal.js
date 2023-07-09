import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  StyleSheet,
} from "react-native";

function CalendarModal({ visible, onModalClose, selectedDay }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onModalClose}>
      <SafeAreaView style={styles.modalSafeArea}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{selectedDay}</Text>
          <TouchableOpacity style={styles.buttonClose} onPress={onModalClose}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalSafeArea: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalView: {
    width: "90%",
    height: "30%",
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
});

export default CalendarModal;
