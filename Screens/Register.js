import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Picker,
  Button,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // Navigates user to the Email screen with the entered name as a parameter
  const handleName = () => {
    //Handle empty or too short

    navigation.navigate("Email", name);
  };

  return (
    <SafeAreaView>
      {/* Prompt */}
      <Text style={styles.title}>What's Your Name?</Text>

      {/* Back button */}
      <Pressable>
        <Text onPress={() => navigation.navigate("Home")}>Back</Text>
      </Pressable>

      {/* Name input */}
      <View style={styles.main}>
        <TextInput
          placeholder="Your Full Name"
          style={styles.textbox}
          onChangeText={setName}
        />

        {/* Continue button */}
        <Pressable style={styles.cont} onPress={handleName}>
          <Text style={styles.text}>Continue</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
  },
  small: {
    width: "30%",
  },
  cont: {
    backgroundColor: "blue",
    width: "80%",
    padding: 10,
    borderRadius: 6,
    borderWidth: 0.7,
    borderColor: "blue",
    marginVertical: 5,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
  title: {
    fontWeight: "700",
    fontSize: "30px",
    textAlign: "center",
  },
  textbox: {
    backgroundColor: "white",
    width: "80%",
    padding: 10,
    borderRadius: 6,
    borderWidth: 0.7,
    marginVertical: 5,
    borderColor: "gray",
  },
});

export default Register;
