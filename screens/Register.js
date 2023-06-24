import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
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
    // Handle empty or too short

    navigation.navigate("EmailPassword", name);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoidingView}
    >
      <SafeAreaView style={styles.main}>
        {/* Prompt */}
        <Text style={styles.title}>What's Your Name?</Text>

        {/* Name input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textBox}
            placeholder="Full Name"
            onChangeText={setName}
          />
        </View>

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          {/* Back button */}
          <Pressable
            style={[styles.button, styles.back]}
            onPress={() => navigation.navigate("LoginRegister")}
          >
            <Text style={styles.backText}>Back</Text>
          </Pressable>

          {/* Gap */}
          <View style={styles.gap} />

          {/* Continue button */}
          <Pressable
            style={[styles.button, styles.continue]}
            onPress={handleName}
          >
            <Text style={styles.continueText}>Continue</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "10%",
  },
  title: {
    marginTop: "10%",
    fontWeight: "700",
    fontSize: 30,
    textAlign: "center",
  },
  inputContainer: {
    height: 50,
    width: "80%",
  },
  textBox: {
    backgroundColor: "white",
    width: "100%",
    padding: 10,
    borderRadius: 6,
    borderWidth: 0.7,
    borderColor: "gray",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: "5%",
  },
  button: {
    borderRadius: 6,
    borderWidth: 0.7,
    padding: 10,
    height: 50,
    flex: 1,
    justifyContent: "center",
  },
  back: {
    backgroundColor: "#c3ddf2",
    borderColor: "#c3ddf2",
  },
  continue: {
    backgroundColor: "blue",
    borderColor: "blue",
  },
  backText: {
    textAlign: "center",
    fontWeight: "700",
  },
  continueText: {
    textAlign: "center",
    fontWeight: "700",
    color: "white",
  },
  gap: {
    width: "5%",
  },
});

export default Register;
