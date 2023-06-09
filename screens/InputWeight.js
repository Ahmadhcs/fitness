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
import React, { useLayoutEffect, useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const InputWeight = () => {
  const navigation = useNavigation();
  const [state, setState] = useContext(AuthContext);

  const [weight, setWeight] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]); // re-run effect if navigation object changes

  const handleAdd = async () => {
    //Handle the add by sending back to backend etc
    if (weight === "") {
      alert("Please Enter Your Weight");
      return;
    }

    // Date details
    const today = new Date();
    const currentDate = today.toDateString();

    const weightToday = {
      weight: weight,
      date: currentDate.slice(4, 10) + currentDate.slice(10),
    };

    try {
      const resp = await axios.post("http://localhost:8000/api/addWeight", {
        weightToday,
        id: state.user._id,
      });
      if (resp.data.error) {
        alert(resp.data.error);
      } else {
        setState(resp.data);
        console.log("This", resp.data);
        await AsyncStorage.setItem("auth-rn", JSON.stringify(resp.data));
        navigation.navigate("Weight");
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, marginTop: screenHeight * 0.175 }}>
      <Text style={styles.today}>What is your weight today?</Text>
      <TextInput
        value={weight}
        caretHidden={true}
        placeholder="Enter Weight"
        placeholderTextColor={"black"}
        style={styles.input}
        onChangeText={setWeight}></TextInput>

      <Pressable style={styles.button} onPress={handleAdd}>
        <Text style={styles.add}>Add Weight</Text>
      </Pressable>
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

export default InputWeight;
