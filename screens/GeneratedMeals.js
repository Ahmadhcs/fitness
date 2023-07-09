import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import FoodCard from "../components/FoodCard";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const GeneratedMeals = () => {
  const navigation = useNavigation();

  const testArray = [
    {
      protein: 90,
      carbs: 98,
      fats: 21,
    },
    {
      protein: 81,
      carbs: 120,
      fats: 12,
    },
    {
      protein: 10,
      carbs: 10,
      fats: 50,
    },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]); // re-run effect if navigation object changes

  return (
    <ScrollView style={{ paddingTop: 10, paddingBottom: 10 }}>
      {testArray.map((meal, index) => (
        <>
          <View key={index} style={{ flexDirection: "row" }}>
            <Text
              style={{
                paddingLeft: screenWidth * 0.08,
                paddingTop: screenHeight * 0.04,
                fontSize: screenWidth * 0.075,
                fontWeight: "700",
              }}>
              Meal {index + 1}
            </Text>
          </View>
          <View
            style={{ paddingLeft: screenWidth * 0.07, paddingTop: screenHeight * 0.025 }}>
            <FoodCard protein={meal.protein} carbs={meal.carbs} fats={meal.fats} />
          </View>
        </>
      ))}
    </ScrollView>
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
