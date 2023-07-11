import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ExerciseCard = ({ name }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 5,
    elevation: 1,
  },
  text: {
    fontSize: 16,
  },
});

export default ExerciseCard;
