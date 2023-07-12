import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const DayLogged = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 15, paddingLeft: 15 }}>
        <Text style={{ fontSize: 17.5, fontWeight: "600" }}>Sunday</Text>
        <Text style={{ fontSize: 12.5, paddingTop: 2.5 }}>July 8</Text>
      </View>

      <View style={{ paddingLeft: 10, paddingTop: 25 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ width: "55%" }}>Calories</Text>
          <Text>3,600 kcal</Text>
        </View>

        <View style={{ flexDirection: "row", paddingTop: 22.5 }}>
          <Text style={{ width: "55%" }}>Protien</Text>
          <Text>250 grams</Text>
        </View>

        <View style={{ flexDirection: "row", paddingTop: 22.5 }}>
          <Text style={{ width: "55%" }}>Carbs</Text>
          <Text>450 grams</Text>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 22.5 }}>
          <Text style={{ width: "55%" }}>Fats</Text>
          <Text>250 grams</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.45,
    height: screenHeight * 0.3,
    borderRadius: 20,
    backgroundColor: "white",
    marginLeft: 10,
  },
});

export default DayLogged;
