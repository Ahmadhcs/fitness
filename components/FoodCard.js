import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const FoodCard = (props) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <View style={styles.container}>
        {/* Custom TextInput with placeholder passed from props */}
        <Text style={{ fontSize: 18, fontWeight: "700", width: "90%" }}>Food Name</Text>

        <View style={{ flexDirection: "row", paddingTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "500", paddingTop: 20, width: "50%" }}>
            Serving
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              paddingTop: 21,
              width: "50%",
              textAlign: "right",
            }}>
            300G
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "500", paddingTop: 15, width: "50%" }}>
            Calories
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              paddingTop: 15,
              width: "50%",
              textAlign: "right",
            }}>
            1,500kcal
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.LogButton}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>Log</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.85,
    height: screenHeight * 0.35,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 20,
  },

  input: {},
  LogButton: {
    backgroundColor: "blue",
    width: screenWidth * 0.65,
    height: screenHeight * 0.05,
    borderRadius: 12.5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: screenWidth * 0.1,
    marginTop: screenHeight * 0.0125,
  },
});

export default FoodCard;
