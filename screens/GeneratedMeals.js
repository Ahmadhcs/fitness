import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import FoodCard from "../components/FoodCard";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const GeneratedMeals = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]); // re-run effect if navigation object changes

  const handleAdd = () => {
    //Handle the add by sending back to backend etc
    navigation.navigate("Weight", { TodayWeight: weight });
  };
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            paddingLeft: screenWidth * 0.08,
            paddingTop: screenHeight * 0.04,
            fontSize: screenWidth * 0.075,
            fontWeight: "700",
          }}>
          Meal 1
        </Text>
      </View>
      <View style={{ paddingLeft: screenWidth * 0.07, paddingTop: screenHeight * 0.025 }}>
        <FoodCard />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  today: {
    fontSize: screenWidth * 0.09,
    textAlign: "center",
    fontWeight: "500",
  },
  input: {
    backgroundColor: "white",
    width: screenWidth * 0.5,
    height: screenHeight * 0.07,
    marginTop: screenHeight * 0.08,
    marginLeft: screenWidth * 0.225,
    textAlign: "center",
    fontSize: 27.5,
    borderRadius: "20%",
  },
  button: {
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    width: screenWidth * 0.8,
    backgroundColor: "blue",
    borderRadius: 6,
    borderWidth: 0.7,
    borderColor: "blue",
    marginLeft: screenWidth * 0.1,
    height: screenHeight * 0.05,
    marginTop: screenHeight * 0.03,
  },
  add: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 15,
  },
});
export default GeneratedMeals;
