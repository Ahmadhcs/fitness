import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const WeightBar = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", paddingTop: 10, paddingLeft: 17.5 }}>
        <Text style={styles.dateText}>{props.date}</Text>
        <Text style={styles.actualWeight}>{props.weight}</Text>
      </View>
      <Text style={styles.weightChange}>1 kg</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.09,
    borderRadius: "30%",
    marginBottom: 10,
    shadowColor: "#171717",
    shadowOffset: { width: 1, height: 2.5 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderRadius: 20,
    backgroundColor: "white",
  },
  dateText: {
    fontSize: 18,
    fontWeight: "500",
  },
  weightChange: {
    fontSize: 15,
    fontWeight: "300",

    paddingLeft: 18,
  },
  actualWeight: {
    marginLeft: screenWidth * 0.45,
    marginTop: 15,
    fontSize: 18,
    fontWeight: "500",
  },
});

export default WeightBar;
